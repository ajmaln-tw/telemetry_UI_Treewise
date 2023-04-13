import { Files, Checkbox, CustomInput, CustomSelect, DatePicker, Input, RadioButtons, Textarea, FileUploader, ToggleButton } from "./form-controller-components";
import CustomSwitch from "./form-controller-components/CustomSwitch";
import FileUploadCommon from "./form-controller-components/FileUploadCommon";
import Input2 from "./form-controller-components/input2";

const FormController = (props) => {
  const { control, ...rest } = props;

  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "input2":
      return <Input2 {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
      return <CustomSelect {...rest} />;
    case "radio":
      return <RadioButtons {...rest} />;
    case "checkbox":
      return <Checkbox {...rest} />;
    case "date":
      return <DatePicker {...rest} />;
    case "customInput":
      return <CustomInput {...rest} />;
    case "file":
      return <Files {...rest} />;
    case "fileUploader":
      return <FileUploader {...rest} />;
    case "fileUpload":
      return <FileUploadCommon {...rest} />;
    case "toggleButton":
      return <ToggleButton {...rest} />;
    case "switch":
      return <CustomSwitch {...rest} />;
    default:
      return null;
  }
};

export default FormController;
