import type { AWS } from '@serverless/typescript'

// complementary generic types
export type ValueOf<T> = T[keyof T]

// missing aws types
export type AWSFunction = ValueOf<AWS['functions']>
