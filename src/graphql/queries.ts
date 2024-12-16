import { gql } from "@apollo/client";

export const GET_SOME_DATA = gql`
  query GetSomeData {
    landing {
      title
      description
    }
  }
`;

export const GET_NOTIFICATIONS = gql`
  query GetNotifications {
    notifications {
      id
      user
      message
      date
    }
  }
`;
