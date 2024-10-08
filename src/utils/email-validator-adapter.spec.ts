import { EmailValidatorAdapter } from './email-validator-adapter'
import validator from 'validator'

vi.mock(import('validator'), async (importOriginal) => {
  const actual = await importOriginal()
  return {
    ...actual,
    isEmail (): boolean {
      return true
    }
  }
})

const makeSut = (): EmailValidatorAdapter => {
  return new EmailValidatorAdapter()
}

describe('EmailValidator Adapter', () => {
  test('Should return false if validator return false', () => {
    const sut = makeSut()

    vi.spyOn(validator, 'isEmail').mockReturnValueOnce(false)

    const isValid = sut.isValid('invalid_email@mail.com')
    expect(isValid).toBe(false)
  })

  test('Should return true if validator return true', () => {
    const sut = new EmailValidatorAdapter()

    const isValid = sut.isValid('valid_email@mail.com')
    expect(isValid).toBe(true)
  })

  test('Should call validator with correct email', () => {
    const sut = new EmailValidatorAdapter()

    const isEmailSpy = vi.spyOn(validator, 'isEmail')

    sut.isValid('any_email@mail.com')

    expect(isEmailSpy).toHaveBeenCalledWith('any_email@mail.com')
  })
})
