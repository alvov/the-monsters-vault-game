require('components/obj/obj.css');
require('./wall.css');

export default ({ wallId }) => (
    <div className="wall obj" data-id={wallId}></div>
)