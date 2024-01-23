import Swal from "sweetalert2";

interface Response {
    response: any,
    successTitle?: string,
    successText?:string,
    successCallback?: any,
    errorTitle?: string,
    errorText?: string,
    errorCallback?: any,

}

export const handleResponse = ({
    response,
    successTitle="",
    successText="",
    errorTitle="",
    errorText="",
    successCallback,
    errorCallback
} : Response) => {
    if (response[0]) {

        Swal.fire({
          icon: 'success',
          title: successTitle,
          text: successText,
        })
        successCallback();
        return true;
      }
  
      Swal.fire({
        icon: "error",
        title: errorTitle,
        text: errorText
      });

      errorCallback(response[1]);

      return false;
}