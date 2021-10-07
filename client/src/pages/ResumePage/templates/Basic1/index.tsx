import React, { useEffect } from "react";
import { useActions } from "../../../../hooks/useActions";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import "./resume.css";
import "./global.css"

import dummyId from "../../../../api/dummy";


const Resume = () => {
    const education = useTypedSelector((state) => state.educations.currentState);
    const bio = useTypedSelector((state) => state.bio.currentState);
    const experience = useTypedSelector((state) => state.experiences.currentState);
    const projects = useTypedSelector((state) => state.projects.currentState);
    const skills = useTypedSelector((state) => state.skills.currentState);

    const { fetchSkills } = useActions();

    useEffect(() => {
        fetchSkills(dummyId);
    }, []);

    return (
        <>
            <div id="doc2" className="yui-t7">
                <div id="inner">

                    <div id="hd">
                        <div className="yui-gc">
                            <div className="yui-u first">
                                <h1>Shihab Sikder</h1>
                                <h2>Student</h2>
                            </div>

                            <div className="yui-u">
                                <div className="contact-info">

                                    <h3><a href="mailto:name@yourdomain.com">zedrex@zedrex.com</a></h3>
                                    <h3>(313) - 867-5309</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="bd">
                        <div id="yui-main">
                            <div className="yui-b">

                                <div className="yui-gf">
                                    <div className="yui-u first">
                                        <h2>Profile</h2>
                                    </div>

                                    <div className="yui-u">
                                        <p className="enlarge">
                                            Progressively evolve cross-platform ideas before impactful infomediaries. Energistically visualize tactical initiatives before cross-media catalysts for change.
                                        </p>
                                    </div>

                                </div>

                                <div className="yui-gf">
                                    <div className="yui-u first">
                                        <h2>Skills</h2>
                                    </div>
                                    <div className="yui-u">
                                        {
                                            skills.map((elem) =>
                                                <div className="talent" key={elem.id}>
                                                    <h2>{elem.level}</h2>
                                                    <p>{elem.description}</p>
                                                </div>)
                                        }
                                    </div>
                                </div>

                                <div className="yui-gf">
                                    <div className="yui-u first">
                                        <h2>Technical</h2>
                                    </div>
                                    <div className="yui-u">
                                        <ul className="talent">
                                            <li>XHTML</li>
                                            <li>CSS</li>
                                            <li className="last">Javascript</li>
                                        </ul>

                                        <ul className="talent">
                                            <li>Jquery</li>
                                            <li>PHP</li>
                                            <li className="last">CVS / Subversion</li>
                                        </ul>

                                        <ul className="talent">
                                            <li>OS X</li>
                                            <li>Windows XP/Vista</li>
                                            <li className="last">Linux</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="yui-gf">

                                    <div className="yui-u first">
                                        <h2>Experience</h2>
                                    </div>

                                    <div className="yui-u">
                                        {
                                            experience.map((elem) =>
                                                <div className="job" key={elem.id}>
                                                    <h2>{elem.workplace}</h2>
                                                    <h3>{elem.designation}</h3>
                                                    <h4>{elem.dateFrom}-{elem.dateTo}</h4>
                                                    <p>{elem.description}</p>
                                                </div>)
                                        }
                                    </div>
                                </div>


                                <div className="yui-gf last">
                                    <div className="yui-u first">
                                        <h2>Education</h2>
                                    </div>
                                    {
                                        education.map((elem) =>
                                            <div className="yui-u">
                                                <h2>{elem.institution}</h2>
                                                <h3>{elem.certificateName}; <strong>{elem.result} GPA</strong> </h3>
                                            </div>)
                                    }
                                </div>


                            </div>
                        </div>
                    </div>

                    <div id="ft">
                        <p>Jonathan Doe &mdash; <a href="mailto:name@yourdomain.com">name@yourdomain.com</a> &mdash; (313) - 867-5309</p>
                    </div>

                </div>


            </div>
        </>
    );
};

export default Resume;
