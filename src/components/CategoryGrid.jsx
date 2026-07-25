import SvgIcon from './SvgIcon';
import './CategoryGrid.css';

export default function CategoryGrid({ items }) {
  return (
    <div className="kp-grid2">
      {items.map((item, i) => (
        <div className="kp-gi" key={i}>
          <SvgIcon
            paths={item.paths}
            lines={item.lines}
            rects={item.rects}
            circles={item.circles}
            stroke={item.stroke}
            strokeWidth="1.5"
          />
          <div className="kp-gi-info">
            <p className="kp-gi-t">{item.title}</p>
            <p className="kp-gi-d">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
