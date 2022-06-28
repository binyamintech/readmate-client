import SubmitForm from '../../../components/Common/forms/SubmitForm/SubmitForm'
import FormTitle from '../../../components/Common/FormTitle'
import Input from '../../../components/Common/Input/Input'
import SelectInput from '../../../components/Common/SelectInput/SelectInput'
import SignButton from '../../../components/Common/SignButton/SignButton'
import SubTitleLogin, { SubTitleGeneral } from '../../../components/Common/SubTitleLogin'
import './style.css'


export default function ClassroomIdPage(){
return<div className='classroom-page'>
<FormTitle content="Welcome john!"/>
<SubTitleGeneral content="Enter the classroom id and select the level"/>
<SubmitForm >
<Input type="text" content="Classroom ID"/>
<SelectInput options={[1,2,3,4,5,6]} title="Select The Reading Level" />
<footer>
<SignButton content="Submit" />
</footer>
</SubmitForm>
</div>




}