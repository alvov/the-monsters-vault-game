require('components/obj/obj.css');
require('./scene.css');

import Field from 'components/field/Field';
import Wall from 'components/wall/Wall';

export default () => (
    <div className="scene obj">
        <Field/>
        <Wall wallId={0}/>
        <Wall wallId={1}/>
        <Wall wallId={2}/>
        <Wall wallId={3}/>
    </div>
)