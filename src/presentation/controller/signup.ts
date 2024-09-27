export class SignUpController {
  handle (_httpRequest: unknown): unknown {
    return {
      statusCode: 400,
      body: new Error('Missing param: name')
    }
  }
}
