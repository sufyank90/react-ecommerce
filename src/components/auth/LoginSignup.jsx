import { useState } from 'react';
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { RiMentalHealthFill } from "react-icons/ri";

function LoginSignup() {
    const [openModal, setOpenModal] = useState(false);
    const [email, setEmail] = useState('');
    const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup
    const [dropdownOpen, setDropdownOpen] = useState(false);

    function onCloseModal() {
        setOpenModal(false);
        setEmail('');
    }

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const toggleAuthMode = () => {
        setIsLogin(!isLogin);
    };

    return (
        <>
            <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        {isLogin ? (
                            <>
                                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="email" value="Your email" />
                                    </div>
                                    <TextInput
                                        id="email"
                                        placeholder="name@company.com"
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="password" value="Your password" />
                                    </div>
                                    <TextInput id="password" type="password" required />
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex items-center gap-2">
                                        <Checkbox id="remember" />
                                        <Label htmlFor="remember">Remember me</Label>
                                    </div>
                                    <a href="#" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
                                        Lost Password?
                                    </a>
                                </div>
                                <div className="w-full">
                                    <Button>Log in to your account</Button>
                                </div>
                                <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                                    Not registered?&nbsp;
                                    <a href="#" onClick={toggleAuthMode} className="text-cyan-700 hover:underline dark:text-cyan-500">
                                        Create account
                                    </a>
                                </div>
                            </>
                        ) : (
                            <>
                                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Create an account</h3>
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="email" value="Your email" />
                                    </div>
                                    <TextInput
                                        id="email"
                                        placeholder="name@company.com"
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="password" value="Your password" />
                                    </div>
                                    <TextInput id="password" type="password" required />
                                </div>
                                <div className="w-full">
                                    <Button>Create your account</Button>
                                </div>
                                <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                                    Already registered?&nbsp;
                                    <a href="#" onClick={toggleAuthMode} className="text-cyan-700 hover:underline dark:text-cyan-500">
                                        Sign in
                                    </a>
                                </div>
                            </>
                        )}
                    </div>
                </Modal.Body>
            </Modal>

            <div className="relative bg-gray-800 rounded-full p-2">
                <div className="flex justify-between items-center">
                    <div className="text-teal-400 text-xl font-bold pl-2">WEB-STORE</div>
                    <div className="text-white space-x-4">
                        <a href="/" className="hover:text-gray-300">Home</a>
                        <button
                            id="mega-menu-full-dropdown-button"
                            onClick={toggleDropdown}
                            className="relative items-center justify-between w-full py-2 px-3 text-white rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                        >
                            Company
                            <svg
                                className="inline w-2.5 h-2.5 ms-2.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 4 4 4-4"
                                />
                            </svg>
                        </button>
                        <a href="#about" className="hover:text-gray-300">About</a>
                        <a href="#values" className="hover:text-gray-300">Values</a>
                        <a href="/contact" className="hover:text-gray-300">Contact Us</a>
                    </div>
                    <div className='pr-1'>
                        <button onClick={() => setOpenModal(true)} className="text-teal-400 border-2  border-teal-400 font-bold py-2 px-4 rounded-full">Login</button>
                    </div>
                </div>

                {dropdownOpen && (
                   <div
                   id="mega-menu-full-dropdown"
                   className="absolute text-left top-full left-60 mt-3  rounded-xl border-gray-200 shadow-sm bg-gray-100 md:bg-gray-100 md:bg-opacity-90 border-y dark:bg-gray-800 dark:border-gray-600 z-10"
               >
                   <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
                       <ul>
                           <li>
                               <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700">
                               <svg class="w-6 h-6  mr-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.737 8.737a21.49 21.49 0 0 1 3.308-2.724m0 0c3.063-2.026 5.99-2.641 7.331-1.3 1.827 1.828.026 6.591-4.023 10.64-4.049 4.049-8.812 5.85-10.64 4.023-1.33-1.33-.736-4.218 1.249-7.253m6.083-6.11c-3.063-2.026-5.99-2.641-7.331-1.3-1.827 1.828-.026 6.591 4.023 10.64m3.308-9.34a21.497 21.497 0 0 1 3.308 2.724m2.775 3.386c1.985 3.035 2.579 5.923 1.248 7.253-1.336 1.337-4.245.732-7.295-1.275M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
</svg>

                                   <div>
                                       <div className="font-semibold">Electronics</div>
                                       <span className="text-sm text-gray-500 dark:text-gray-400">
                                           Shop the latest electronics including smartphones, tablets, and more.
                                       </span>
                                   </div>
                               </a>
                           </li>
                           <li>
                               <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700">
                               <svg class="w-6 h-6 mr-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M14 7h-4v3a1 1 0 0 1-2 0V7H6a1 1 0 0 0-.997.923l-.917 11.924A2 2 0 0 0 6.08 22h11.84a2 2 0 0 0 1.994-2.153l-.917-11.924A1 1 0 0 0 18 7h-2v3a1 1 0 1 1-2 0V7Zm-2-3a2 2 0 0 0-2 2v1H8V6a4 4 0 0 1 8 0v1h-2V6a2 2 0 0 0-2-2Z" clip-rule="evenodd"/>
</svg>

                                   <div>
                                       <div className="font-semibold">Fashion</div>
                                       <span className="text-sm text-gray-500 dark:text-gray-400">
                                           Discover the latest trends in fashion for men, women, and kids.
                                       </span>
                                   </div>
                               </a>
                           </li>
                           <li>
                               <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700">
                                   <svg
                                       className="w-5 h-5 mr-3 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                                       aria-hidden="true"
                                       xmlns="http://www.w3.org/2000/svg"
                                       fill="currentColor"
                                       viewBox="0 0 18 20"
                                   >
                                       <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                                   </svg>
                                   <div>
                                       <div className="font-semibold">Home & Kitchen</div>
                                       <span className="text-sm text-gray-500 dark:text-gray-400">
                                           Find everything you need for your home, from furniture to appliances.
                                       </span>
                                   </div>
                               </a>
                           </li>
                       </ul>
                       <ul>
                           <li>
                               <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700">
                                   <RiMentalHealthFill className="w-5 h-5 mr-3"/>

                                   <div>
                                       <div className="font-semibold">Beauty & Health</div>
                                       <span className="text-sm text-gray-500 dark:text-gray-400">
                                           Explore a wide range of beauty and health products.
                                       </span>
                                   </div>
                               </a>
                           </li>
                           <li>
                               <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700">
                                   <svg
                                       className="w-5 h-5 mr-3 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                                       aria-hidden="true"
                                       xmlns="http://www.w3.org/2000/svg"
                                       fill="currentColor"
                                       viewBox="0 0 18 20"
                                   >
                                       <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                                   </svg>
                                   <div>
                                       <div className="font-semibold">Sports & Outdoors</div>
                                       <span className="text-sm text-gray-500 dark:text-gray-400">
                                           Gear up for your outdoor adventures and sports activities.
                                       </span>
                                   </div>
                               </a>
                           </li>
                           <li>
                               <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700">
                                   <svg
                                       className="w-5 h-5 mr-3 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                                       aria-hidden="true"
                                       xmlns="http://www.w3.org/2000/svg"
                                       fill="currentColor"
                                       viewBox="0 0 18 20"
                                   >
                                       <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                                   </svg>
                                   <div>
                                       <div className="font-semibold">Toys & Games</div>
                                       <span className="text-sm text-gray-500 dark:text-gray-400">
                                           Find a variety of toys and games for children of all ages.
                                       </span>
                                   </div>
                               </a>
                           </li>
                       </ul>
                   </div>
               </div>
               
                )}
            </div>
        </>
    );
}

export default LoginSignup;
