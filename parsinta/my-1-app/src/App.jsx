/* eslint-disable no-unused-vars */
import { IconBrandFacebook, IconBrandGithub, IconBrandTwitter } from "@tabler/icons-react"
import Button from "./components/Button"
import Card from "./components/Card"

function FirstApp() {
  return (
    <div className="bg-slate-900 grid place-content-center min-h-screen">
      <div className="flex gap-x-2">
        <Button {...{ type: 'submit', onClick: () => alert('Login with facebook') }}>
          <IconBrandFacebook />
          Login
        </Button>
        <Button className='bg-sky-600' onClick={() => alert('Login with twitter')}>
          <IconBrandTwitter />
          Login
        </Button>
        <Button className='bg-black' type='button'>
          <IconBrandGithub />
          Login
        </Button>
      </div>
    </div>
  )
}

function SecondApp() {
  return (
    <div className="bg-slate-100 text-slate-800 tracking-tight antialiased flex items-center justify-center min-h-screen">
      <div className="max-w-md w-full">
        <Card>
          <Card.Title>Coba</Card.Title>
          <Card.Body>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea ducimus possimus dolorem molestias accusantium nam quidem alias! Distinctio quaerat cum nostrum mollitia autem sequi earum, deserunt aut, unde commodi delectus?
          </Card.Body>
          <Card.Footer><Button>Register</Button></Card.Footer>
        </Card>
      </div>
    </div>
  )
}

export default SecondApp