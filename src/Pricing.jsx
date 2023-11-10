function Pricing() {
    return (
        <div>
            <section className="pricing">
                <div className="pricing-title">
                    <h2 className="pricing-title-header">Flat pricing, no management fees.</h2>
                    <h4 className="pricing-title-subHeader">Whether you’re one person trying to get ahead or a big firm trying to take over the world, we’ve got a plan for you.</h4>

                    <div className="pricing-btns">
                        <button className="pricing-btn">Monthly</button>
                        <button className="pricing-btn2">Annually</button>
                    </div>
                </div>


                <div className="pricing-content">


                    <div className="pricing-content-children">
                        <div className="pricing-content-children-logo">Starter</div>
                        <div className="pricing-content-children-price">$0</div>
                        <div className="pricing-content-children-paragraph">You’re new to investing but want to do it right. Get started for free.</div>
                        <button className="pricing-content-children-btn">Get started for free</button>
                        
                             <ul className="pricing-content-children-list">
                                <li> <span>Commission-free trading </span></li>
                                <li> <span>Multi-layered encryption </span></li>
                                <li> <span>One tip every day </span> </li>
                                <li> <span>Invest up to $1,500 each month </span></li>
                                
                             </ul>
                        
                        
                    </div>


                    <div className="pricing-content-children">
                        <div className="pricing-content-children-logo">Investor</div>
                        <div className="pricing-content-children-price">$7</div>
                        <div className="pricing-content-children-paragraph">You’ve been investing for a while. Invest more and grow your wealth faster.</div>
                        <button className="pricing-content-children-btn">Subcribe</button>
                        
                             <ul className="pricing-content-children-list">
                                <li> <span>Commission-free trading </span></li>
                                <li> <span>Multi-layered encryption</span></li>
                                <li> <span>One tip every day</span></li>
                                <li> <span>Invest up to $1,500 each month </span> </li>
                                <li> <span>Basic transaction anonymization </span> </li>
                                
                             </ul>
                        
                        
                    </div>


                    <div className="pricing-content-children-black">
                        <div className="pricing-content-children-logo">VIP</div>
                        <div className="pricing-content-children-price">$199</div>
                        <div className="pricing-content-children-paragraph">You’ve got a huge amount of assets but it’s not enough. To the moon.</div>
                        <button className="pricing-content-children-btn-color">Get started for free</button>
                        
                             <ul className="pricing-content-children-list">
                                <li> <span>Commission-free trading </span></li>
                                <li> <span>Multi-layered encryption</span> </li>
                                <li> <span>Real-time tip notifications </span> </li>
                                <li> <span>No investment limits</span></li>
                                <li> <span>Advanced transaction anonymization</span> </li>
                                <li> <span>Automated tax-loss harvesting</span> </li>
                                
                             </ul>
                        
                        
                    </div>
                
                
                
                
                
                
                </div>



            </section>
        </div>
    )
}


export default Pricing