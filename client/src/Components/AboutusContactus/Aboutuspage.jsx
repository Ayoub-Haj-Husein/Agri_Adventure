import React from 'react'

function Aboutuspage() {
  const team = [
    {
        avatar: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
        name: "Melad Abulail",
        title: "Front-End Developer",
        desc: "Took a huge part by developing the entire Front-End of this website.",
        linkedin: "https://www.linkedin.com/in/meladabulail",
        twitter: "https://www.instagram.com/its_abulail",
        github: "javascript:void(0)"
    },
    {
        avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
        name: "Ayoub Husien",
        title: "Back-End Developer",
        desc: "Took a huge part by developing the entire Back-End of this website.",
        linkedin: "https://www.linkedin.com/in/ayoub-husein-659b54254/",
        twitter: "javascript:void(0)",
        github: "javascript:void(0)"
    }
]

  return (
    <div className='z-0'>
      <div>
        <div class="bg-[#F2F5F8] text-black">
          <section
            id="features"
            class="relative block px-6 py-10 md:py-20 md:px-10  border-t border-b border-neutral-900 bg-[#F2F5F8]"
          >
            <div class="relative mx-auto max-w-5xl text-center">
              <span class="text-black my-3 flex items-center justify-center font-medium uppercase tracking-wider">
                Who are we
              </span>
              <h2 class="block w-full text-black text-3xl sm:text-4xl">
                Agriadventure
              </h2>
              <p class="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-black">
                Your best choice for agri-tourism
              </p>
            </div>

            <div class="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
              <div class="rounded-md border border-neutral-800  p-8 text-center shadow">
                <div class="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-color-swatch"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2"></path>
                    <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9"></path>
                    <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12"></path>
                    <line x1="17" y1="17" x2="17" y2="17.01"></line>
                  </svg>
                </div>
                <h3 class="mt-6 text-black">User-Friendly</h3>
                <p class="my-4 mb-0 font-normal leading-relaxed tracking-wide text-black">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iusto reprehenderit magni est vel, quam ipsam omnis accusamus
                  modi! Sit inventore est excepturi ea dolorum cupiditate? Natus
                  iure distinctio totam excepturi!
                </p>
              </div>

              <div class="rounded-md border border-neutral-800  p-8 text-center shadow">
                <div class="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-bolt"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3"></polyline>
                  </svg>
                </div>
                <h3 class="mt-6 text-black">Smooth Tour Scheduling</h3>
                <p class="my-4 mb-0 font-normal leading-relaxed tracking-wide text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Iusto, iure vel. Perspiciatis, vitae? Officiis aspernatur
                  voluptas rem quaerat vero, accusamus delectus suscipit ad
                  voluptate blanditiis! Doloribus, omnis! Commodi, omnis
                  veritatis?
                </p>
              </div>

              <div class="rounded-md border border-neutral-800  p-8 text-center shadow">
                <div class="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-tools"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4"></path>
                    <line x1="14.5" y1="5.5" x2="18.5" y2="9.5"></line>
                    <polyline points="12 8 7 3 3 7 8 12"></polyline>
                    <line x1="7" y1="8" x2="5.5" y2="9.5"></line>
                    <polyline points="16 12 21 17 17 21 12 16"></polyline>
                    <line x1="16" y1="17" x2="14.5" y2="18.5"></line>
                  </svg>
                </div>
                <h3 class="mt-6 text-black">Tourism Boost</h3>
                <p class="my-4 mb-0 font-normal leading-relaxed tracking-wide text-black">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
                  adipisci sed voluptatibus tenetur officia laborum possimus.
                  Molestiae, beatae deleniti iusto, provident, voluptatibus at
                  voluptates fuga numquam quo repudiandae doloribus nisi.
                </p>
              </div>
            </div>

            <div class="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"></div>
            <div class="absolute bottom-0 right-0 z-0 h-1/3 w-full"></div>
          </section>
        </div>
      </div>

      <section className="py-14">
        <div className="max-w-screen-xl px-4 mx-auto md:px-8">
          <div className="max-w-xl">
            <h3 className="text-3xl font-semibold text-gray-800 sm:text-4xl">
              Meet our talented team
            </h3>
            <p className="mt-3 text-gray-600">
              This is the team behind this great work !
            </p>
          </div>
          <div className="mt-12">
            <ul className="grid gap-8 lg:grid-cols-2">
              {team.map((item, idx) => (
                <li key={idx} className="gap-8 sm:flex">
                  <div className="w-full h-60">
                    <img
                      src={item.avatar}
                      className="object-cover object-center w-full h-full shadow-md rounded-xl"
                      alt=""
                    />
                  </div>
                  <div className="mt-4 sm:mt-0">
                    <h4 className="text-lg font-semibold text-gray-700">
                      {item.name}
                    </h4>
                    <p className="text-indigo-600">{item.title}</p>
                    <p className="mt-2 text-gray-600">{item.desc}</p>
                    <div className="flex gap-4 mt-3 text-gray-400">
                      <a href={item.twitter}>
                        <svg
                          className="w-5 h-5 duration-150 hover:text-gray-500"
                          fill="currentColor"
                          viewBox="0 0 48 48"
                        >
                          <g clip-path="url(#clip0_17_80)">
                            <path
                              fill="currentColor"
                              d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_17_80">
                              <path fill="currentColor" d="M0 0h48v48H0z" />
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                      <a href={item.github}>
                        <svg
                          className="w-5 h-5 duration-150 hover:text-gray-500"
                          fill="currentColor"
                          viewBox="0 0 48 48"
                        >
                          <g fill="currentColor" clip-path="url(#clip0_910_44)">
                            <path
                              fill-rule="evenodd"
                              d="M24 1A24.086 24.086 0 008.454 6.693 23.834 23.834 0 00.319 21.044a23.754 23.754 0 003.153 16.172 23.98 23.98 0 0012.938 10.29c1.192.221 1.641-.518 1.641-1.146 0-.628-.024-2.45-.032-4.442-6.676 1.443-8.087-2.817-8.087-2.817-1.089-2.766-2.663-3.493-2.663-3.493-2.178-1.478.163-1.45.163-1.45 2.413.17 3.68 2.461 3.68 2.461 2.138 3.648 5.616 2.593 6.983 1.976.215-1.545.838-2.596 1.526-3.193-5.333-.6-10.937-2.647-10.937-11.791a9.213 9.213 0 012.472-6.406c-.246-.6-1.069-3.026.234-6.322 0 0 2.015-.64 6.602 2.446a22.904 22.904 0 0112.017 0c4.583-3.086 6.594-2.446 6.594-2.446 1.307 3.288.484 5.714.238 6.322a9.194 9.194 0 012.476 6.414c0 9.163-5.615 11.183-10.957 11.772.859.742 1.626 2.193 1.626 4.421 0 3.193-.028 5.762-.028 6.548 0 .636.433 1.38 1.65 1.146a23.98 23.98 0 0012.938-10.291 23.754 23.754 0 003.151-16.175A23.834 23.834 0 0039.56 6.69 24.086 24.086 0 0024.009 1H24z"
                              clip-rule="evenodd"
                            />
                            <path d="M9.089 35.264c-.052.119-.243.154-.398.071-.155-.083-.27-.237-.214-.36.056-.122.242-.154.397-.07.155.082.274.24.215.359zM10.063 36.343a.4.4 0 01-.493-.11c-.155-.167-.187-.396-.068-.499.12-.102.334-.055.489.11.155.167.19.396.072.499zM11.008 37.714c-.147.103-.397 0-.536-.206a.395.395 0 010-.569c.147-.098.397 0 .537.202.139.202.143.47 0 .573zM12.292 39.042c-.131.146-.397.106-.616-.091-.219-.198-.27-.467-.139-.609.131-.142.397-.102.624.091.226.194.27.466.131.609zM14.092 39.816c-.06.186-.33.269-.6.19-.27-.08-.449-.3-.397-.49.051-.19.326-.277.6-.19.274.087.449.297.397.49zM16.056 39.95c0 .194-.223.36-.509.364-.286.004-.52-.154-.52-.348 0-.193.222-.36.508-.363.286-.004.52.15.52.347zM17.884 39.646c.036.194-.163.395-.45.443-.285.047-.536-.067-.572-.257-.035-.19.171-.395.45-.447.278-.05.536.068.572.261z" />
                          </g>
                          <defs>
                            <clipPath id="clip0_910_44">
                              <path fill="currentColor" d="M0 0h48v48H0z" />
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                      <a href={item.linkedin}>
                        <svg
                          className="w-5 h-5 duration-150 hover:text-gray-500"
                          fill="none"
                          viewBox="0 0 48 48"
                        >
                          <g clip-path="url(#clip0_17_68)">
                            <path
                              fill="currentColor"
                              d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_17_68">
                              <path fill="currentColor" d="M0 0h48v48H0z" />
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Aboutuspage