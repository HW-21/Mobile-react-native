import { Forms } from '../core/Forms'

export async function fillLoginForm() {
  await Forms.fillInput('username', 'ken@test.xyz')
  await Forms.fillInput('password', 'cx-pass', true)
}
