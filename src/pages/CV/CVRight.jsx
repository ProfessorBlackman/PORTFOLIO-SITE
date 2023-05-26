import "./CV.css";

export default function CVRight() {
  return (
      <div id="CV-right">
        <div id="side-right">
            <div className="head-top">
                <h2 className="right-text">Methuselah Nwodobeh</h2>
                <h3 className="right-h3">Full-stack Developer</h3>
            </div>
            <div className="head-middle">
                <p className="right-txt">
                Passionate Web Developer with a knack for problem-solving and a
                creative mindset. With extensive knowledge of development tools, such as
                HTML, CSS, JavaScript, and Django, I excel at crafting intuitive and visually
                appealing user interfaces. Additionally, my experience with back-end
                technologies allows me to build robust and scalable web applications. I
                take pride in staying up-to-date with industry trends and leveraging the
                latest tools and frameworks to deliver outstanding results. Let's collaborate
                to bring your digital vision to life!
                </p>
            </div>
            <div id="right-bold" className="right-h3">
            <h3 className="right-bold-h3">Experience</h3>
            <h4 id="right-h4">NOV 2022 - PRESENT</h4>
            <p>Junior Back-end Developer</p>
            <p>AmaliTech Services GmbH, Takoradi, Ghana</p>
            <ul>
                <li className="main-point">
                    Worked in a team to build a platform to perform
                    reverse image search using the hamming distance
                    of image hashes.
                    <ul>
                        <li className="sub-point">
                        Built web scrapers to collect images from
                        various websites using Scrapy.
                        </li>
                        <li className="sub-point">
                        Automated web scrapers using Celery to
                        run on a schedule.
                        </li>
                        <li className="sub-point">
                        Configured user authentication using
                        Google and Facebook auth.
                        </li>
                        <li className="sub-point">
                        Implemented email backend for sending
                        emails from the backend.
                        </li>
                        <li className="sub-point">
                        Set up monitoring for the entire backend
                        and automation using Flower for Celery,
                        Prometheus, and Grafana
                        </li>
                        <li className="sub-point">
                        Built web scrapers to collect images from
                        various websites using Scrapy.
                        </li>
                        <li className="sub-point">
                        Automated web scrapers using Celery to
                        run on a schedule.
                        </li>
                        <li className="sub-point">
                        Configured user authentication using
                        Google and Facebook auth.
                        </li>
                        <li className="sub-point">
                        Implemented email backend for sending
                        emails from the backend.
                        </li>
                    </ul>
                </li>
            </ul>
            </div>
            <div id="right-bold-1" className="right-h3">
                <h3 className="right-bold-h3">Education</h3>
                <div className="edu">
                    <h4 id="right-h4">SEP 2019 - NOV 2022</h4>
                    <p>Electrical/Electronics Engineering</p>
                    <p>Cape Coast Technical University, Cape Coast, Ghana</p>
                    <ul>
                        <li className="main-point">
                            Specialization: 
                            <ul>
                                <li>Instrumentation and Control
                                Systems Engineering
                                </li>
                                <li className="main-point">
                                    Digital Computer Design
                                </li>
                                <li>
                                    Computer Operating Systems
                                </li>
                            </ul>
                        </li>
                        <li className="main-point">
                            Position Held: 
                            <ul>
                                <li>Was Secretary of Electrical/Electronics Students Association
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="edu">
                    <h4 id="right-h4">SEP 2016 - June 2019</h4>
                    <p>General Science</p>
                    <p>Ngleshie Amanfro SHS</p>
                </div>
                <div className="edu">
                    <h4 id="right-h4">SEP 2013 - June 2016</h4>
                    <p>Basic Education</p>
                    <p>Martinet International School</p>
                </div>
            </div>
        </div>
      </div>
  );
}
