import {
  useracts,
  useract,
  createUseract,
  updateUseract,
  deleteUseract,
} from './useracts'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('useracts', () => {
  scenario('returns all useracts', async (scenario) => {
    const result = await useracts()

    expect(result.length).toEqual(Object.keys(scenario.useract).length)
  })

  scenario('returns a single useract', async (scenario) => {
    const result = await useract({ id: scenario.useract.one.id })

    expect(result).toEqual(scenario.useract.one)
  })

  scenario('creates a useract', async () => {
    const result = await createUseract({
      input: { id_user: 6881789 },
    })

    expect(result.id_user).toEqual(6881789)
  })

  scenario('updates a useract', async (scenario) => {
    const original = await useract({ id: scenario.useract.one.id })
    const result = await updateUseract({
      id: original.id,
      input: { id_user: 7751678 },
    })

    expect(result.id_user).toEqual(7751678)
  })

  scenario('deletes a useract', async (scenario) => {
    const original = await deleteUseract({ id: scenario.useract.one.id })
    const result = await useract({ id: original.id })

    expect(result).toEqual(null)
  })
})
