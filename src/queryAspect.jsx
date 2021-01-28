import React from 'react';
import ReactDOM from 'react-dom';


class Toggle extends React.Component {
  constructor(props) {
    super(props);
    
    const AstrologyOptions = [
      {
        label: "上昇星座(Asc)",
        value: "Asc",
      },
      {
        label: "太陽星座(☉)",
        value: "Sun",
      },
      {
        label: "月亮(☽)",
        value: "Moon",
      },
      {
        label: "水星(☿)",
        value: "mercury",
      },
        
      {
        label: "金星(♀)",
        value: "venus",
      },
      
      {
        label: "火星(♂)",
        value: "mars",
      },
        
      {
        label: "木星(♃)",
        value: "jupiter",
      },
        
      {
        label: "土星(♄)",
        value: "saturn",
      },
        
      {
        label: "天王星(♅)",
        value: "uranus",
      },
        
      {
        label: "海王星(♆)",
        value: "neptune",
      },
        
      {
        label: "冥王星(♇)",
        value: "pluto",
      },
        
    ];
    
    const Select1 = ({ children, onChange, value }) => (
      <select onChange={onChange} value={value}>
        {children}
      </select>
    );
    
    const Select2 = ({ children, onChange, value }) => (
      <select onChange={onChange} value={value}>
            {children}
          </select>
    );
    
    this.state = { selectValue: '' }
    }
    callThis = (e) => {
        console.log("value："+e.target.value);
        
    
    const MyComponent = () => (
        <Select options={AstrologyOptions} />

    )
    
    

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log("查詢相位")
    
    
    console.log(e.target.value);
    
  }

  render() {
    return (
      
      <div>
          <div>  
          <select ref="astrology1">
            <option selected value="asc">上昇星座(Asc)</option>
            <option value="sun">太陽星座(☉)</option>
            <option value="moon">月亮(☽)</option>
            <option value="mercury">水星(☿)</option>.
            <option value="venus">金星(♀)</option>
            
            <option value="mars">火星(♂)</option>
            <option value="jupiter">木星(♃)</option>
            <option value="saturn">土星(♄)</option>
            <option value="uranus">天王星(♅)</option>
            <option value="neptune">海王星(♆)</option>
            <option value="pluto"> 冥王星(♇)</option>
        
          </select>
          </div>
        和
        <div>
        <select ref="astrology2">
          <option selected value="asc">上昇星座(Asc)</option>
          <option value="sun">太陽星座(☉)</option>
          <option value="moon">月亮(☽)</option>
          <option value="mercury">水星(☿)</option>
          <option value="venus">金星(♀)</option>
          
          <option value="mars">火星(♂)</option>
          <option value="jupiter"> 木星(♃)</option>
          <option value="saturn">土星(♄)</option>
          <option value="uranus">天王星(♅)</option>
          <option value="neptune">海王星(♆)</option>
          <option value="pluto"> 冥王星(♇)</option>
        
        </select>
        </div>
        呈
      <div>
        <select ref="aspects">
          <option selected value="0°">0°</option>
          <option value="60°">60°</option>
          <option value="90°">90°</option>
          <option value="120°">120°</option>
          <option value="150°">150°</option>
          <option value="180°">180°</option>
        
        </select>
      </div>
        
        <button onClick={this.handleClick}>
              確定
            </button>
            
      </div>
      
     
    );
  }
}


class Title extends React.Component {
  render() {
    return (<h1 className="h2">{this.props.label}</h1>)
  }
}

class Paragraph extends React.Component {
  render() {
    return (
      <p className="lead">
      {this.props.text}
      </p>
    )
  }
}


ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
