import MembershipBenefits from "./Membership";
import KarateRegistrationForm from "./Form";
export function Membership(){
    return <div className=" flex flex-col pb-16 items-center bg-gradient-to-r from-blue-400 to-purple-500">
        <MembershipBenefits/>
        <div className="text-3xl text-white font-bold mb-4"> Register Now</div>
        <KarateRegistrationForm/>
    </div>
}