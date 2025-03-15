import React from 'react'
import Button from './Button'
import './index.css'
import { MdOutlineLogin, MdOutlineLogout,MdPowerSettingsNew } from "react-icons/md"
import { AiOutlineHome } from "react-icons/ai"
import { LuSettings } from "react-icons/lu"
import { TfiFaceSmile, TfiFaceSad } from "react-icons/tfi"
import { RiUserLine } from "react-icons/ri"
import { IoMdInformationCircleOutline } from "react-icons/io"
import { IoLocationOutline } from "react-icons/io5"
import { HiArrowLeft, HiArrowRight } from "react-icons/hi"

{/* <MdOutlineLogin />
<MdOutlineLogout />
<AiOutlineHome />
<LuSettings />
<MdPowerSettingsNew />
<TfiFaceSmile />
<TfiFaceSad />
<RiUserLine />
<IoMdInformationCircleOutline />
<IoLocationOutline />
<HiArrowLeft />
<HiArrowRight /> */}

function App() {
  return (
    <div className='bg-[#777] p-10'>
      <div>
        <Button prime>Login</Button>
      </div>
      <div>
        <Button support>Register</Button>
      </div>
      <div>
        <Button dark>Submit</Button>
      </div>
      <div>
        <Button light>Cancel</Button>
      </div>
      <div>
        <Button forest>Read more</Button>
      </div>
      <div>
        <Button alert>Logout</Button>
      </div>
      <div>
        <Button blaze>Prev</Button>
      </div>
      <div>
        <Button inform>Next</Button>
      </div>
      <div>
        <Button prime rounded>Rounded</Button>
      </div>
      <div>
        <Button support rounded>Buttons</Button>
      </div>
      <div>
        <Button prime outline>Outline</Button>
      </div>
      <div>
        <Button support outline>Buttons</Button>
      </div>
      <div>
        <Button forest outline>Outline</Button>
      </div>
      <div>
        <Button alert outline>Buttons</Button>
      </div>
      <div>
        <Button blaze outline>Outline</Button>
      </div>
      <div>
        <Button inform outline>Buttons</Button>
      </div>
    </div>
  )
}

export default App
