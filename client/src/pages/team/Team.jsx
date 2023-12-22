import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import "./Team.scss";
import Scheduler2 from "../../components/scheduler/Scheduler2.jsx";
import Tasks from '../../components/tasks/Tasks.jsx';
import { teams } from '../../data.js';
import Card from 'react-bootstrap/Card';

const Team = () => {

  const variant1 = 'Dark';
  const variant2 = 'Secondary';

  return (
    <div className='home'>
        <div className='nav-nb'>
            <Navbar />
        </div>
        <div className='h-body'>
            <Sidebar className="side-nb"/>
            <div className='home-content'>
              <div className='left project-left-div'>
                <div className='team-left'>
                  <div className='heading-left-team'>
                    Team Under My Supervision
                  </div>
                  <div className='project-details-div'>
                      <div className='team-name-div'>
                      
                      </div>
                      <div className='ll'>
                        <div className='project-details-div'>
                          <Card
                            bg={variant1.toLowerCase()}
                            key={variant1}
                            text={variant1.toLowerCase() === 'light' ? 'dark' : 'white'}
                            style={{ width: '18rem' }}
                            className="mb-2"
                          >
                            <Card.Body>
                              <Card.Title>{variant1} Card Title </Card.Title>
                              <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        </div>
                        <div className='team-mems-div'>
                          <Card
                            bg={variant2.toLowerCase()}
                            key={variant2}
                            text={variant2.toLowerCase() === 'light' ? 'dark' : 'white'}
                            style={{ width: '18rem' }}
                            className="mb-2"
                          >
                            <Card.Body>
                              <Card.Title>{variant2} Card Title </Card.Title>
                              <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        </div>
                      </div>
                      <div className='rr'>
                        <div className='dd1 skl-req-div'>
                          Skills Req: <span></span>
                        </div>
                        <div className='dd1 est-req-div'>
                          Estimated Time: <span></span>
                        </div>
                      </div>
                  </div>
                  <div className='tasks'>
                    <Tasks/>
                  </div>
                </div>
              </div>
                
                <div className='right team-right'>
                  <Scheduler2/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team