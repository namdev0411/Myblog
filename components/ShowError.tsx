import { TypedErrorRessponse } from "@/utils/type";
import { Fragment } from "react";

export default function ShowError(props: TypedErrorRessponse) {
  return (
    <div>
      {props.errors.map((error) => (
        <Fragment key={error.code}>
          <p>
            {error.code}：{error.message}
          </p>
        </Fragment>
      ))}
    </div>
  );
}
