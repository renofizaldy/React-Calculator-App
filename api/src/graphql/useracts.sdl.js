export const schema = gql`
  type Useract {
    id: Int!
    id_user: Int!
    lastLogin: DateTime!
    lastLogout: DateTime!
  }

  type Query {
    useracts: [Useract!]! @requireAuth
    useract(id: Int!): Useract @requireAuth
  }

  input CreateUseractInput {
    id_user: Int!
    lastLogin: DateTime!
    lastLogout: DateTime!
  }

  input UpdateUseractInput {
    lastLogout: DateTime
  }

  type Mutation {
    createUseract(input: CreateUseractInput!): Useract! @requireAuth
    updateUseract(id: Int!, input: UpdateUseractInput): Useract! @requireAuth
  }
`
