// import '@testing-library/jest-dom/extend-expect';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {createSerializer} from 'enzyme-to-json';/* para los snapshots(junto con línea 9) */

Enzyme.configure({ adapter: new Adapter() });

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));