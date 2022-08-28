import { AddUserTask, CheckEmailInUseTask } from '$/data/tasks'
import { AuthUserTask } from '$/data/tasks/auth-user.task'
import { SnapshotUserTask } from '$/data/tasks/snapshot-user.task'
import { ISignUpCase } from '$/domain/cases'
import globalVars from '$/global-vars'
import { AuthenticateAdapter, CreateUuidAdapter } from '$/infra/adapters'
import { AddUserDao, GetUserByEmailDao, SnapshotUserDao } from '$/infra/mongo/daos'
import { SignUpCase } from '$/presentation/cases'

export const makeSignUp = (): ISignUpCase => {
  const getUserByEmailRepo = new GetUserByEmailDao()
  const createUuidContract = new CreateUuidAdapter()
  const addUserRepo = new AddUserDao()
  const snapshotUserRepo = new SnapshotUserDao()
  const authenticateContract = new AuthenticateAdapter(globalVars.jwt.secret, globalVars.jwt.expires)
  const checkEmailInUseTask = new CheckEmailInUseTask(getUserByEmailRepo)
  const addUserTask = new AddUserTask(createUuidContract, addUserRepo)
  const snapshotUserTask = new SnapshotUserTask(createUuidContract, snapshotUserRepo)
  const authUserTask = new AuthUserTask(authenticateContract)
  const instance = new SignUpCase(checkEmailInUseTask, addUserTask, snapshotUserTask, authUserTask)
  return instance
}
