import { AppButton, Container, SectionHeading } from "../../components";

export const SignUp = () => {
  return (
    <Container>
      <div className="roboto-fonts flex justify-between relative">
        <div className="w-1/2 rounded-md rounded-r-[2rem] shadow-lg bg-no-repeat bg-cover bg-center bg-[url(https://s3-alpha-sig.figma.com/img/9506/57ac/da9e59e0a3a94114b5d584f121091a2c?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iTF~OiQfC4VQXJmoa30eefZzKtkHSZHnGmqiYobGzFyyZMbnRQHm-Fvcw1dlNkUVI~IW4d7rOrBE3WT4e1sVT7nsen1JYwsm7PKes4k5Io-S5~8SJeCM73s7KzZxGsN6AxVmliyGerdCsNn70tM4YhKeQoPbyTEmFnwOX1XXWNL0KVJxvnAWRGxD9EPekPfZ9Yy~AeQ4NYoCRKxWn1xRg~RotCZ60211YnSw9kQC2DHZYPW7AtgvT45tMgtLwXKOyfUNtPWaXVDHahN2SmK52ud15azgP-Kvh4iHk0Qm7SgMx0wZg54gAX2P9RcwESJF79D6AJypWbfsOzqGiumyKg__)]">
          <div className="">
            <h4 className="text-4xl w-2/3 mx-20 font-semibold mt-20 text-gray-100">Marvel’s Wolverine Set for an Epic 2025 Launch on PS5</h4>
          </div>
        </div>
        <section className="w-1/2 bg-gray-50 dark:bg-gray-900 py-32">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            
            <SectionHeading title="Create an account" className="text-[3rem] w-full mb-6 text-center tracking-tighter" />
            <div className="w-full rounded-lg md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create account
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="confirm-password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="@username"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
               
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        aria-describedby="terms"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="terms"
                        className="font-light text-gray-500 dark:text-gray-300"
                      >
                        I accept the{" "}
                        <a
                          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                          href="#"
                        >
                          Terms and Conditions
                        </a>
                      </label>
                    </div>
                  </div>
                  <AppButton
                    className=" w-full rounded-3xl normal-case"
                  >
                    Sign Up
                  </AppButton>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account?{" "}
                    <a
                      href="#"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Login here
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
};
