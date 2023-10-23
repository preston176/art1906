import React from 'react'
import "./CampaignStrategy.css"
import LatestBlogs from '../LatestBlogs'
import Footer from '../Footer'
import "./CampaignStrategy.css"

function CampaignStrategy() {
  return (
    <div>
        <div className="nav">
          <div className="l__side">
            Art <span>1906</span>_ <br />Creative Shops
          </div>
          <div className="r__side"><ul>
            <li>Services</li>
            <li>Pricing</li>
            <li>Resources</li>
            <li>Contact</li>
            <li>Meet the Team</li>
          </ul></div>
        </div>
        <div className="heading__container">
            <img src="/campaignstrategy.png" alt="contentdevelopment" />
            <h3>Campaign Strategy</h3>
        </div>
        <p className='cont__text'>
        In today's fast-paced business world, measurable and trackable results are critical. At Art1906, we understand this better than anyone else. Our team of skilled marketing consultants specializes in developing effective digital marketing campaigns that are cohesive, well-planned, and goal-oriented. Our approach is designed to meet your business goals and scale as your business grows. Whether you're an entrepreneur starting a new venture or expanding your current business, we leverage our expertise to help you succeed.
  </p>
  <div className="section__container">
    <div className="section">
        <div className="img"><img src="/campaign_research.png" alt="" /></div>
        <div className="section__desc">
            <h5>Campaign Research</h5>
        <p>Before we create any campaign recommendations, or begin writing copy for your ads or website, we spend a significant amount of time researching your industry's market. This includes calculating revenue potential and determining the growth you're looking for, as well as the best way to measure it.</p>
        </div>
    </div>

    <div className="section">
        <div className="img"><img src="/strategy.png" alt="" /></div>
        <div className="section__desc">
            <h5>Strategy</h5>
        <p>After completing comprehensive market research for your business, we revisit your goals and determine the most effective ways to support them. We establish campaign objectives that align with your goals and collaborate with you and your team to determine the right metrics. Using your vision, we create a personalized plan that includes your perfect marketing mix. Remember, every business is different, so while some marketing tactics have proven to be successful, your specific project is unique to your business, industry, and market.</p>
        </div>
    </div>

    <div className="section">
        <div className="img"><img src="/trackingandreporting.png" alt="" /></div>
        <div className="section__desc">
            <h5>Tracking and Reporting</h5>
        <p>Campaign planning can be a daunting task that requires significant effort and investment. Therefore, to ensure that your campaign is running smoothly, it's vital to track its progress with custom marketing tracking solutions. We closely monitor your results while comparing them to your goals, making proactive changes when necessary to avoid any unpleasant surprises when the campaign ends.</p>
        </div>
    </div>

    <div className="section">
        <div className="img"><img src="/resultassessment.png" alt="" /></div>
        <div className="section__desc">
            <h5>Results Assessment</h5>
        <p>Custom reports and dashboards for marketing analysis provide valuable insights into the mechanics of your campaign performance. With this analysis, we can make adjustments to future campaigns and build on past successes. Our team is dedicated to achieving your goals, and we only consider it a success when you celebrate.</p>
        </div>
    </div>
  </div>

  {/* why */}
  <div className="why">
    <h4>Why you should choose Art1906 for your Campaign Strategy Development.</h4>
    <p className='parag'>We have extensive experience in creating and executing successful campaign strategies for various clients across different industries. We offer a comprehensive range of services, from market research and analysis, to creative design and content production, to media planning and buying, to performance measurement and optimization

</p>
    <p className='parag'>We are a team of passionate and talented professionals who are committed to delivering high-quality results and exceeding your expectations
</p>
    <p className='parag'>Art1906 values collaboration and communication, and we will work closely with you to understand your goals, challenges, and opportunities, and to tailor a campaign strategy that suits your needs and budget

</p>
    <p className='parag'>We are always up to date with the latest trends and technologies in the marketing field, and we constantly innovate and experiment to find new and effective ways to reach and engage your target audience

</p>
  </div>
  <div className="btn__here">
    <h3>View Our Packages Here</h3>
  </div>
  <LatestBlogs />
  <Footer />
    </div>
  )
}

export default CampaignStrategy