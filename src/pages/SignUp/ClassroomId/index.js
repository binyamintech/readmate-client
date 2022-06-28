import SubmitForm from "../../../components/common/forms/SubmitForm/SubmitForm";
import FormTitle from "../../../components/common/FormTitle";
import Input from "../../../components/Common/Input/Input";
import SelectInput from "../../../components/Common/SelectInput/SelectInput";
import SignButton from "../../../components/Common/SignButton/SignButton";
import SubTitleLogin, {
  SubTitleGeneral,
} from "../../../components/common/SubTitleLogin";
import "./style.css";

export default function ClassroomIdPage() {
  return (
    <div className="classroom-page">
      <FormTitle content="Welcome john!" />
      <SubTitleGeneral content="Enter the classroom id and select the level" />
      <SubmitForm>
        <Input type="text" content="Classroom ID" />
        <SelectInput
          options={["High-School", "Student"]}
          title="Select The Reading Level"
        />
        <footer>
          <SignButton content="Submit" />
        </footer>
      </SubmitForm>
    </div>
  );
}
