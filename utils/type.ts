type TypedSuccessResponse<T> = {
  data: T;
};

type HandledError = {
  code: string;
  message: string;
};

export type TypedErrorRessponse = {
  errors: HandledError[];
};

export type TypedResponse<T = void> =
  | TypedSuccessResponse<T>
  | TypedErrorRessponse;

export type UnexpectedError = {
  status: number;
  message: string;
};

export function isBodyContainData<T>(result: TypedResponse<T>): result is {
  data: T;
} {
  return Object.hasOwn(result, "data");
}

export function isUnexpectedError(
  result: UnexpectedError | TypedResponse<any>
): result is UnexpectedError {
  return Object.hasOwn(result, "status");
}
