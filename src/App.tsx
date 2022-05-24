import iconImage from './public/images/logo.svg';
import data from '../data.json';

export const App = () => {
  return (
    <main>
      <div className="content">
        <div className="card">
          <div className="card-header flex">
            <div>
              <span>My balance</span>
              <p className='balance'>$921.48</p>
            </div>

            <img style={{ width: '40px' }} src={iconImage} alt="icon image" />
          </div>

          <div className="card-body">
            <h2>Spending - Last 7 days</h2>

            <div className="chart flex">
              {data.map((item, index) => {
                return (
                  <div className='pilar' key={index}>
                    <div className={`graf ${item.day}`}></div>
                    <span>{item.day}</span>
                  </div>
                )
              })}
            </div>
            <hr />
          </div>
          
          <div className="card-footer">
              <div className='flex'>
                <div>
                  <span className='text-muted'>Total this month</span>
                  <p className='total'>$478.33</p>
                </div>

                <div>
                  <p className='percent'>+2.4%</p>
                  <span className='text-muted'>from last month</span>
                </div>
              </div>
          </div>
        </div>
      </div>
    </main>
  );
}