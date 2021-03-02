import React from "react";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

const BookMarksQuery = gql`
  {
    bookmark {
      url
    }
  }
`;
export const Content = () => {
  const { loading, error, data } = useQuery(BookMarksQuery);
  return (
    <div>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};
