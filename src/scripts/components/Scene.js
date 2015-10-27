import Field from 'scripts/components/Field/Field';
import Wall from 'scripts/components/Wall/Wall';

export default () => (
    <div className="scene obj">
        <Field/>
        <Wall wallId={0}/>
        <Wall wallId={1}/>
        <Wall wallId={2}/>
        <Wall wallId={3}/>
    </div>
)