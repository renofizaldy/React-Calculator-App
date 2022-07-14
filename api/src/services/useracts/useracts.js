import { db } from 'src/lib/db'

export const useracts = () => {
  return db.useract.findMany()
}

export const useract = ({ id }) => {
  return db.useract.findUnique({
    where: { id },
  })
}

export const createUseract = ({ input }) => {
  return db.useract.create({
    data: input,
  })
}

export const updateUseract = ({ id, input }) => {
  return db.useract.update({
    data: input,
    where: { id },
  })
}
