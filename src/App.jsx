import { useState } from "react";
import Button from "./Button";
import Alerts from "./Alerts";
import { RiInformationFill } from "react-icons/ri";
import Badges from "./Badges";
import { AiTwotoneLike } from "react-icons/ai";
import { BsApple } from "react-icons/bs";
import Cards from "./Cards";
import Modal from "./Modal";
function App() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1 className="text-white font-bold text-4xl text-center p-8">
        Reusable Components
      </h1>
      <div className=" text-white flex gap-5 justify-center flex-col items-center p-6 border-2 border-white">
        <h1 className="text-white ">
          Reusable buttons in different sizes and one disabled button
        </h1>
        <div className="text-center">
          <h2 className="mb-1 font-bold">Small Button</h2>
          <Button size="small" color="light" title="Light" />
        </div>
        <div className="text-center">
          <h2 className="mb-1 font-bold">Medium Button</h2>
          <Button size="medium" color="failure" title="Failure" />
        </div>
        <div className="text-center">
          <h2 className="mb-1 font-bold">Large Button</h2>
          <Button size="large" color="sucess" title="Sucess" />
        </div>
        <div className="text-center">
          <h2 className="mb-1 font-bold">Disabled Button</h2>
          <Button size="large" disabled={true} title="Disabled button" />
        </div>
      </div>
      <div className="text-white flex gap-5 justify-center flex-col items-center p-6 border-2 border-white text-center">
        <h1>Reusable Alerts</h1>
        <Alerts
          icon={<RiInformationFill className="bg-green-300" />}
          size="small"
          color="success"
          title="Success! This is a success alert!"
        />
        <Alerts
          icon={<RiInformationFill className="bg-red-300" />}
          size="medium"
          color="warning"
          title="Warning! This is an error alert!"
        />
        <Alerts
          icon={<RiInformationFill className="bg-blue-200" />}
          size="large"
          color="info"
          title="Info! This is an informal alert! Read more here or dismiss"
        />
      </div>
      <div className="text-white flex gap-5 justify-center flex-col items-center p-6 border-2 border-white text-center">
        <h1>Reusable Badges</h1>
        <Badges
          icon={<AiTwotoneLike />}
          size="medium"
          color="default"
          title="Like"
        />
        <div className="flex gap-2">
          <Badges size="small" color="failure" title="Failure" />
          <Badges size="small" color="default" title="Default" />
        </div>
      </div>
      <div className="text-white flex  gap-5 justify-center flex-col items-center p-6 border-2 border-white text-center">
        <h1>Reusable Cards</h1>
        <div className="flex gap-5">
          <Cards
            href="https://www.zoom.com/"
            imgAlt="Remote Platform"
            imgSrc="src\workspace.avif"
            cardTitle="Workspace"
            cardText="When using Zoom, you can create your own workspace. Work from home, the office or why not in the tropics."
            buttonTree="readMore"
            buttonTextTree="Read more here"
            buttonOne="download"
            buttonTextOne="Download here"
            iconOne={
              <BsApple className="text-xl bg-blue-100 text-gray-500 hover:text-gray-700" />
            }
          />
          <Cards
            href="https://www.zoom.com/"
            imgAlt="Remote Platform"
            imgSrc="src\zoompicture.avif"
            cardTitle="Work Remote"
            cardText="With Zoom you can work remote anytime, anywhere."
            buttonTree="readMore"
            buttonTextTree="Read more here"
            buttonOne="download"
            buttonTextOne="Download here"
            iconOne={
              <BsApple className="text-xl bg-blue-100 text-gray-500 hover:text-gray-700" />
            }
          />
          <Cards
            href="https://www.zoom.com/"
            imgAlt="Remote Platform"
            imgSrc="src\downloadapp.avif"
            buttonOne="download"
            buttonTextOne="Download on App Store"
            iconOne={
              <BsApple className="text-xl bg-blue-100 hover:bg-blue-200" />
            }
            buttonTwo="download"
            buttonTextTwo="Download on Mac"
            iconTwo={
              <BsApple className="text-xl bg-blue-100 hover:bg-blue-200" />
            }
            cardTitle="Download the app"
            cardText="By getting the app you can join the community and easier get access to the remote life."
          />
        </div>
      </div>
      <div className="text-white flex gap-5 justify-center flex-col items-center p-6 border-2 border-white text-center">
        <h1>Reusable Modals</h1>
        <div className="flex justify-center pt-10 text-lg">
          <button
            className="flex p-8 border hover:bg-blue-800 rounded-xl"
            onClick={() => setShow(true)}
          >
            Open Modal
          </button>
        </div>
        <Modal show={show} onClose={() => setShow(false)} size="large">
          <Modal.Header>Modal</Modal.Header>
          <Modal.Body>
            <p>Are you sure you want to continue?</p>
          </Modal.Body>
          <Modal.Footer>
            <h6></h6>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default App;
