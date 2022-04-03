// Liskov Substitution Principle - work with type and subtype bun don't know anything about item

class Person {}

class Member extends Person {
    access() {
        console.log('You have success!');
    }
}

class Guest extends Person {
    isGuest = true;
}

class Frontend extends Member {
    canCreateFrontend() {}
}

class Backend extends Member {
    canCreateBackend() {}
}

class PersonFromDifferentCompany extends Guest {
    access() {
        throw new Error("You don't have access");
    }
}

function openSecretDoor(member) {
    member.access();
}

openSecretDoor(new Frontend());
openSecretDoor(new Backend());

/** openSecretDoor(new PersonFromDifferentCompany()); There should bo member */

// =====================================================================================================================

class Component {
    isComponent = true;
}

class ComponentWithTemplate extends Component {
    render() {
        return `<div>Component</div>`
    }
}

class HigherOrderComponent  extends Component {}

class Header extends ComponentWithTemplate {
    onInit() {}
}

class Footer extends ComponentWithTemplate {
    afterInit() {}
}

class HOC extends HigherOrderComponent {
    render() {
        throw new Error('Render is impossibl here!');
    }

    wrapComponent(component) {
        component.wrapped = true;

        return component;
    }
}

function renderComponent(component) {
    console.log(component.render());
}

renderComponent(new Header());
renderComponent(new Footer());
/** renderComponent(new HOC()); need add other handler */