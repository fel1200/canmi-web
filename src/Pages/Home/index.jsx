import { useState, useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";
import { URL_API_ANSWERS, getToken } from "../../api";
import { IndicatorSumarized } from "../../components/IndicatorSumarized";
import mainImage from "../../assets/mainImage.svg";

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
      const answersSumarized = answersFromAPI.reduce((acc, answer) => {
        const index = acc.findIndex(
          (answerSumarized) => answerSumarized.device_id === answer.device_id
        );
        if (index === -1) {
          acc.push({ ...answer, answers: [] });
        }
        return acc;
      }, []);
      console.log("answersSumarized", answersSumarized);

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
  // useEffect(() => {
  //     getAnswers();
  // }, []);

  return (
    <div>
      <div className="flex flex-row m-5 w-full">
        <h1 className="text-3xl font-medium line-clamp-5 w-96 mt-32 ">
          El asistente que te permite conocer los
          <span className="text-red-500 font-bold"> niveles de calidad </span>
          de la atención médica
        </h1>
        <figure className="w-96 m-8 ml-40">
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
        <div className="flex flex-col align-middle">
          {loading && <ThreeDots color="red" className="self-center m-4" />}
          {errorLoading && <p>Error al obtener la información</p>}
        </div>
      </div>
      <table className="table-auto w-full mb-10">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2">Número</th>
            <th className="px-4 py-2">Indicador</th>
            <th className="px-4 py-2">Usuario</th>
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
    </div>
  );
}

export default Home;
