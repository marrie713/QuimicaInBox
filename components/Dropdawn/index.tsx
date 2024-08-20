 import 'bootstrap/dist/css/bootstrap.min.css';
 import Dropdown from 'react-bootstrap/Dropdown';

function BasicExample() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="Primary" id="dropdown-basic">
        Mais
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Manual do candidato</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Conteúdo relevante</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;