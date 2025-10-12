import React from 'react'
import Button from '../components/Button'

import { MdOutlineLogin, MdOutlineLogout,MdPowerSettingsNew } from 'react-icons/md'
import { AiOutlineHome } from 'react-icons/ai'
import { LuSettings } from 'react-icons/lu'
import { TfiFaceSmile, TfiFaceSad } from 'react-icons/tfi'
import { RiUserLine } from 'react-icons/ri'
import { IoMdInformationCircleOutline } from 'react-icons/io'
import { IoLocationOutline } from 'react-icons/io5'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'

function ButtonPage() { 
  return (
    <div className='bg-[#777] p-10'>
      <div>
        <Button prime className='mb-5'>
          <MdOutlineLogin />
          Login
        </Button>
      </div>
      <div>
        <Button support>
          <RiUserLine />
          Register
        </Button>
      </div>
      <div>
        <Button dark>
          <LuSettings />
          Settings
        </Button>
      </div>
      <div>
        <Button light>
          <IoLocationOutline />
          City?
        </Button>
      </div>
      <div>
        <Button forest>
          <TfiFaceSmile />
          Satisfied?
        </Button>
      </div>
      <div>
        <Button alert>
          <MdOutlineLogout />
          Logout
        </Button>
      </div>
      <div>
        <Button blaze>
          <TfiFaceSad />
          Report Issue
        </Button>
      </div>
      <div>
        <Button inform>
          <IoMdInformationCircleOutline />
          Information
        </Button>
      </div>
      <div>
        <Button prime rounded>
          <HiArrowLeft />
          Prev
        </Button>
      </div>
      <div>
        <Button support rounded>
          <HiArrowRight />
          Next
        </Button>
      </div>
      <div>
        <Button prime outline>
          <MdPowerSettingsNew />
          Power
        </Button>
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
        <Button blaze outline>
          <AiOutlineHome />
          Home
        </Button>
      </div>
      <div>
        <Button inform outline>Buttons</Button>
      </div>
    </div>
  )
}

export default ButtonPage