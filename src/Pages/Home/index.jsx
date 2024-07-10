import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { URL_API_ANSWERS, getToken } from "../../api";
// import { IndicatorSumarized } from "../../components/IndicatorSumarized";
import mainImage from "../../assets/mainImage.svg";
import { indicators } from "../../constants";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { saveAs } from "file-saver";
import ExcelJS from "exceljs";

function Home() {
  const [answers, setAnswers] = useState([]);
  const [answersDetailed, setAnswersDetailed] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState("");

  const getAnswers = async () => {
    setLoading(true);
    setErrorLoading("");
    try {
      console.log("getAnswers");
      const token = await getToken();
      console.log("token", token);
      const response = await fetch(URL_API_ANSWERS, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      //console.log("response", response);
      const data = await response.json();
      //console.log("data", data?.data);
      const answersFromAPI = data?.data;
      //Then we sumarize by device_id

      answersFromAPI.sort((a, b) => b.id - a.id);
      setAnswers(answersFromAPI);
      //Sumarize by device_id and include a new field of the answer with id 102 as
      //field exp

      const answersSumarized = answersFromAPI.reduce((acc, answer) => {
        const index = acc.findIndex(
          (answerSumarized) => answerSumarized.device_id === answer.device_id
        );
        if (index === -1) {
          acc.push({ ...answer, answers: [], exp: "" });
        }
        return acc;
      }, []);
      console.log("answersSumarized", answersSumarized);

      //add new field

      for (let index = 0; index < answersSumarized.length; index++) {
        const answer = answersSumarized[index];
        const response = await fetch(`${URL_API_ANSWERS}/${answer.device_id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        const answers = data?.data;
        answersSumarized[index].answers = answers;

        // get value from numberOfExpedient
        const numberOfExpedient = answers.filter(
          (answer) => answer.question_id === 102
        );
        console.log("numberOfExpedient", numberOfExpedient);
        answersSumarized[index].exp = numberOfExpedient[0]?.answer_value;

        //adding number of indicator from const indicator
        indicators.forEach((indicator) => {
          if (indicator.idIndicator === answersSumarized[index].indicator_id) {
            answersSumarized[index].name = indicator.name;
            console.log("indicator", indicator);
          }
        });
      }
      //order desc by id
      answersSumarized.sort((a, b) => b.id - a.id);
      setAnswersDetailed(answersSumarized);

      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setErrorLoading(`Error al obtener la información ${error.message}`);
      setLoading(false);
    }
  };
  //function to create Excel file with answersSumarized when click on button

  //we create a new var
  //that the answer_value is a new field when question_id is 102

  // const newRowsForExcel = (answersSumarized) => {
  //   const newRows = answersSumarized.map((answer) => {
  //     const newAnswer = { ...answer };
  //     const question102 = answer.answers.find(
  //       (answer) => answer.question_id === 102
  //     );
  //     if (question102) {
  //       newAnswer.answer_value = question102.answer_value;
  //     }
  //     return newAnswer;
  //   });
  //   return newRows;
  // };

  const createExcelFile = () => {
    //create a new Excel file
    const excel = new ExcelJS.Workbook();
    const sheet = excel.addWorksheet("Capturas");
    //add columns
    sheet.addRow([
      "id",
      "device_id",
      "Indicador",
      "Fecha envío",
      "Nombre",
      "Apellido paterno",
      "Apellido materno",
      "Entidad",
      "Municipio",
      "Centro de salud",
      "Usuario",
      // "indicator_id",
      "Expediente",
      "question_id",
      "answer_option",
      "answer_value",
    ]);
    //add rows
    answersDetailed.forEach((answerDetailed) => {
      answerDetailed.answers.forEach((answerDeep) => {
        sheet.addRow([
          answerDetailed.id,
          answerDetailed.device_id,
          answerDetailed.indicator_id,
          new Date(answerDetailed.created_at).toLocaleDateString("es-MX"),
          answerDetailed.name_user,
          answerDetailed.last_name_user_1,
          answerDetailed.last_name_user_2,
          answerDetailed.entity_key,
          answerDetailed.key_municipality,
          answerDetailed.clue_id,
          answerDetailed.user_id,
          answerDetailed.exp,
          answerDeep.question_id,
          answerDeep.answer_option,
          answerDeep.answer_value,
        ]);
      });
    });

    //save the Excel file
    excel.xlsx
      .writeBuffer()
      .then((buffer) => {
        const blob = new Blob([buffer], { type: "application/octet-stream" });
        saveAs(blob, "Capturas.xlsx");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div>
      <div className="flex flex-row justify-center w">
        <h1 className="md:text-2xl lg:text-3xl font-medium sm:text-xl line-clamp-5 w-48 md:w-64 lg:w-96 mt-32 ">
          El asistente que te permite conocer los
          <span className="text-red-500 font-bold"> niveles de calidad </span>
          de la atención médica
        </h1>
        <figure className="w-48 md:w-72 lg:w-96 m-8 ml-40">
          <img src={mainImage} alt="IBERO" />
        </figure>
      </div>
      <div className="flex flex-col justify-center">
        <button
          onClick={() => {
            getAnswers();
          }}
          className="bg-zinc-600 hover:bg-gray-800 w-64 self-center  text-white font-bold py-2 px-4 rounded m-4"
        >
          Consultar capturas
        </button>
        {loading && (
          <ThreeDots
            color="red"
            className="text-center self-center m-4 w-full"
          />
        )}
      </div>
      {answersDetailed.length > 0 && (
        <div className="flex flex-row-reverse mr-16  ">
          <button className=" flex " onClick={() => createExcelFile()}>
            <ArrowDownTrayIcon className="w-6 h-6" />
          </button>
        </div>
      )}
      <div className="flex flex-col items-center  justify-items-center lg:w-full mb-6 h-96">
        <table className="table-auto m-1">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2">id</th>
              <th className="px-4 py-2">Indicador</th>
              <th className="px-4 py-2">Nombre</th>
              <th className="px-4 py-2">Fecha envío</th>
              <th className="px-4 py-2">Nombre</th>
              <th className="px-4 py-2">Respuestas</th>
            </tr>
          </thead>
          <tbody>
            {answersDetailed.map((answerDetailed) => (
              <tr key={answerDetailed.id}>
                <td className="border px-4 py-2 text-center">
                  {answerDetailed.id}
                </td>
                <td className="border px-4 py-2 text-center">
                  {answerDetailed.indicator_id}
                </td>
                <td className="border px-4 py-2 text-left ">
                  {answerDetailed.name}
                </td>
                <td className="border px-4 py-2 text-left ">
                  {
                    //format date day, month, year
                    new Date(answerDetailed.created_at).toLocaleDateString(
                      "es-MX"
                    )
                  }
                </td>
                <td className="border px-4 py-2 text-center">
                  {`${answerDetailed.name_user} 
                  ${answerDetailed.last_name_user_1}
                  ${answerDetailed.last_name_user_2} `}
                </td>
                <td className="border px-4 py-2 text-center">
                  {answerDetailed.answers.length}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex flex-col justify-center w-full">
          {errorLoading && (
            <p className="w-full text-center">
              Error al obtener la información
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
