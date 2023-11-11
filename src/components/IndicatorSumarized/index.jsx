export const IndicatorSumarized = (answerSumarized) => {
  console.log("answerSumarized", answerSumarized?.answerSumarized);
  return (
    <tr>
      <td className="self-center">{answerSumarized?.answerSumarized?.id}</td>
      <td>{answerSumarized?.answerSumarized?.indicator_id}</td>
      <td>{`${answerSumarized?.answerSumarized.name_user} 
        ${answerSumarized?.answerSumarized.last_name_user_1}
        ${answerSumarized?.answerSumarized.last_name_user_2} `}</td>
      <td>{answerSumarized?.answerSumarized?.answers?.length}</td>
    </tr>
  );
};
