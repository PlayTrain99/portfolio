import { useEffect, useRef } from 'react';


function MyComponent() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.setProperty('--quantity', '10');
      // Ustawianie pozycji dla każdego elementu
      Array.from(sliderRef.current.children).forEach((child, index) => {
        (child as HTMLElement).style.setProperty('--position', `${index + 1}`);
      });
    }
  }, []);
  return (
    <div>
      <div className="banner">
        <div className="slider" ref={sliderRef}>
          <div className="item" >
            <img src="images/dragon_1.jpg" alt="" />
          </div>
          <div className="item" >
            <img src="images/dragon_2.jpg" alt="" />
          </div>
          <div className="item" >
            <img src="images/dragon_3.jpg" alt="" />
          </div>
          <div className="item">
            <img src="images/dragon_4.jpg" alt="" />
          </div>
          <div className="item" >
            <img src="images/dragon_5.jpg" alt="" />
          </div>
          <div className="item" >
            <img src="images/dragon_6.jpg" alt="" />
          </div>
          <div className="item" >
            <img src="images/dragon_7.jpg" alt="" />
          </div>
          <div className="item" >
            <img src="images/dragon_8.jpg" alt="" />
          </div>
          <div className="item" >
            <img src="images/dragon_9.jpg" alt="" />
          </div>
          <div className="item" >
            <img src="images/dragon_10.jpg" alt="" />
          </div>
        </div>
        <div className="content">
          <h1 data-content="Piotr G.">Piotr G.</h1>
          <div className="author">
            <h2>FullStack Developer</h2>
            <p><b>Skill</b></p>
            <p>Python (Django)</p>
            <p>JS, TS (React)</p>
            <p>Html, CSS (Bootstrap)</p>
            <p>Figma</p>
            <p>Git</p>
            <p>Jira</p>

          </div>
          <div className="model" style={{ backgroundImage: "url(images/model.jpg)" }}></div>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;

