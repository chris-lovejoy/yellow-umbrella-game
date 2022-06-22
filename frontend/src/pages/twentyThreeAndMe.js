const TwentyThreeAndMe = () => {
  return (
    <div className="flex flex-col justify-center sm:p-0 sm:justify-start bg-gray-1000 md:w-full xl:text-lg px-24 xl:px-64">
      <section className="top my-10 ">
        <h1 className="text-4xl xl:text-5xl sm:text-2xl font-extrabold text-gray-800 m-10 px-2 sm:m-0">
          How to download data from 23andMe
        </h1>
        <p className="px-10 w-4/5 my-2 m-auto">
          Get 100 free trait reports based on an extensive analysis of your
          23andMe raw DNA data. Learn how DNA shapes your nutrition, fitness,
          personality and intelligence traits.
        </p>
      </section>
      <section className="mid flex flex-col justify-center px-100">
        <div className="flex flex-col justify-center m-auto">
          <div className="m-5">
            <div className="flex 2xl:ml-36  xl:ml-20 ">
              <p className="inline px-3 text-sky-700">1</p>
              <p className="inline">Sign in to 23andMe.</p>
            </div>
            <img
              className="mx-auto my-5 md:w-11/12 sm:w-full lg:w-7/12"
              src={process.env.PUBLIC_URL + "images/23andMe/step1.png"}
              alt="Sign In"
            />
          </div>
          <div className="m-5">
            <div className="flex 2xl:ml-36  xl:ml-20">
              <p className="inline px-3 text-sky-700">2</p>
              <p className="inline">
                Visit the{" "}
                <a
                  href="https://auth.23andme.com/login/"
                  className="text-sky-700"
                >
                  Download Raw Data page
                </a>
                . Or, you can visit the page from your Account tab on top-right
                → "<b>Browse Raw Data</b>" → "<b>Download</b>" too.
              </p>
            </div>
            <img
              className="mx-auto my-5 md:w-11/12 sm:w-full lg:w-7/12"
              src={process.env.PUBLIC_URL + "images/23andMe/step2.png"}
              alt="Raw Data"
            />
          </div>
          <div className="m-5">
            <div className="flex 2xl:ml-36  xl:ml-20">
              <p className="inline px-3 text-sky-700">3</p>
              <p className="inline">
                Scroll down and go to the "<b>Request your raw data download</b>
                " section. Opt-in consent, and click "<b>Submit request</b>".
              </p>
            </div>
            <img
              className="mx-auto my-5 md:w-11/12 sm:w-full lg:w-7/12"
              src={process.env.PUBLIC_URL + "images/23andMe/step3.png"}
              alt="Submit Raw Data Request"
            />
          </div>
          <div className="m-5 content-start">
            <div className="flex 2xl:ml-36  xl:ml-20 ">
              <p className="inline px-3 text-sky-700">4</p>
              <p className="inline ">
                You will receive an email from 23andMe in a few minutes.
                Depending on timing, this could take longer than 10 minutes.
                Once you receive the email, download the raw DNA data file. It
                comes as a zip file.
              </p>
            </div>
          </div>
          <div className="m-5">
            <div className="flex 2xl:ml-36  xl:ml-20">
              <p className="inline px-3 text-sky-700">5</p>
              <p className="inline">Upload your file here.</p>
            </div>
            <img
              className="mx-auto my-5 md:w-11/12 sm:w-full lg:w-7/12"
              src={process.env.PUBLIC_URL + "images/23andMe/step5.png"}
              alt="Upload"
            />
          </div>
          <div className="flex flex-col  mx-auto xl:w-5/12">
            <button
              href="#"
              className=" rounded-full m-5 sm:text-xs sm:p-2 md:p-2 md:text-md xl:text-lg xl:p-3 px-6 text-white bg-orange-400 baseline transition delay-150 ease-in-out hover:-translate-y-1 hover:scale-110 duration-300  border-2"
            >
              GOT IT READY TO UPLOAD
            </button>
            <button
              href="https://auth.23andme.com/login/"
              className="rounded-full m-5 sm:text-xs sm:p-2 md:p-2 md:text-md xl:p-2 px-6 text-gray-800 baseline hover:bg-gray-300 hover:duration-300 duration-300 border-2 border-gray-400"
            >
              GO TO 23ANDME AND DOWNLOAD
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TwentyThreeAndMe;
