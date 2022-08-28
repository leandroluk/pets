import { User } from '$/domain/models'

export interface IGetUserByEmailRepo {
  get(email: IGetUserByEmailRepo.Email): Promise<IGetUserByEmailRepo.Result>
}
export namespace IGetUserByEmailRepo {
  export type Email = User['email']
  export type Result = User.WithPassword
}
