import React, { ReactNode } from 'react';
import './Solution.scss';

interface SolutionProps {
    children?: ReactNode;
}

const Solution = ({ children }: SolutionProps) => {
    return (
        <div className="solution">
            <div className="grid wide">
                <div className="solution__content">
                    <h3>Technology solutions</h3>
                    <h1>We Provide IT & Business Solutions</h1>
                    <p>
                        Lorem Ipsum is simply dummysolution content text of the printing and typesetting has
                        been the industry’s standard dummy text
                    </p>
                </div>
                <div className="row">
                    {children ? (
                        children
                    ) : (
                        <>
                            <div className="col l-4">
                                <div className="solution__list">
                                    {/* <div className="solution__item">
                                <div className="solution__item--img">
                                    <Solution />
                                </div>
                                <div className="solution__item--content">
                                    <h3>Business Collaboration</h3>
                                    <p>
                                        Morbi sagittis hendrt nulla ultricies. Cras en diam ips elementum
                                        pretium hendrerit ultricies
                                    </p>
                                </div>
                            </div> */}
                                </div>
                            </div>
                            <div className="col l-4 m-12 c-12">
                                <div className="solution__img">
                                    <div className="solution__img--bg"></div>
                                </div>
                            </div>

                            <div className="col l-4">
                                <div className="solution__list">
                                    {/* <div className="solution__item">
                                <div className="solution__item--img">
                                    <Solution />
                                </div>
                                <div className="solution__item--content">
                                    <h3>Business Collaboration</h3>
                                    <p>
                                        Morbi sagittis hendrt nulla ultricies. Cras en diam ips elementum
                                        pretium hendrerit ultricies
                                    </p>
                                </div>
                            </div> */}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Solution;
