import { defineMessages } from 'react-intl';

const template = (pluginContext) => {
  const {
    React,
  } = pluginContext.lib;

  const {
    Panel,
    Row,
    Col,
  } = pluginContext.layoutComponents;

  const {
    Field,
  } = pluginContext.recordComponents;

  const {
    extensions,
  } = pluginContext.config;

  return (
    <Field name="document">
      <Panel name="id" collapsible>
        <Row>
          <Col>
            <Field name="objectNumber" />
            <Field name="numberOfObjects" />

            <Field name="responsibleDepartments">
              <Field name="responsibleDepartment" />
            </Field>

            <Field name="collection" />
            <Field name="recordStatus" />

            <Field name="publishToList">
              <Field name="publishTo" />
            </Field>

            <Field name="inventoryStatusList">
              <Field name="inventoryStatus" />
            </Field>
          </Col>
        </Row>
      </Panel>

      <Panel name="desc" collapsible collapsed>
        <Row>
          <Col>
            <Field name="copyNumber" />

            <Field name="objectStatusList">
              <Field name="objectStatus" />
            </Field>
          </Col>

          <Col>
            <Field name="editionNumber" />

            <Field name="colors">
              <Field name="color" />
            </Field>
          </Col>
        </Row>
        
        {extensions.dimension.form}

        <Field name="physicalDescription" />

        <Row>
          <Col>
            <Field name="objectComponentGroupList">
              <Field name="objectComponentGroup">
                <Field name="objectComponentName" />
                <Field name="objectComponentInformation" />
              </Field>
            </Field>
          </Col>
        </Row>


        <Panel name="content" collapsible collapsed>
          <Field name="contentDescription" />

          <Row>
            <Col>
              <Field name="contentLanguages">
                <Field name="contentLanguage" />
              </Field>

              <Field name="contentActivities">
                <Field name="contentActivity" />
              </Field>

              <Field name="contentConcepts">
                <Field name="contentConcept" />
              </Field>

              <Field name="contentDateGroup" />

              <Field name="contentPositions">
                <Field name="contentPosition" />
              </Field>

              <Field name="contentObjectGroupList">
                <Field name="contentObjectGroup">
                  <Field name="contentObject" />
                  <Field name="contentObjectType" />
                </Field>
              </Field>
            </Col>

            <Col>
              <Field name="contentPeoples">
                <Field name="contentPeople" />
              </Field>

              <Field name="contentPersons">
                <Field name="contentPerson" />
              </Field>

              <Field name="contentPlaces">
                <Field name="contentPlace" />
              </Field>

              <Field name="contentScripts">
                <Field name="contentScript" />
              </Field>

              <Field name="contentOrganizations">
                <Field name="contentOrganization" />
              </Field>

              <Field name="contentEventNameGroupList">
                <Field name="contentEventNameGroup">
                  <Field name="contentEventName" />
                  <Field name="contentEventNameType" />
                </Field>
              </Field>

              <Field name="contentOtherGroupList">
                <Field name="contentOtherGroup">
                  <Field name="contentOther" />
                  <Field name="contentOtherType" />
                </Field>
              </Field>
            </Col>
          </Row>

          <Field name="contentNote" />
        </Panel>
      </Panel>

      <Panel name="prod" collapsible collapsed>
        <Row>
          <Field name="objectProductionPersonGroupList">
            <Field name="objectProductionPersonGroup">
              <Field name="objectProductionPerson" />
              <Field name="objectProductionPersonRole" />
            </Field>
          </Field>
        </Row>
      </Panel>

      <Panel name="hierarchy" collapsible collapsed>
        <Field name="relation-list-item" subpath="rel:relations-common-list" />
      </Panel>
    </Field>
  );
};

export default pluginContext => ({
  messages: defineMessages({
    name: {
      id: 'form.collectionobject.default.name',
      defaultMessage: 'Standard Template',
    },
  }),
  sortOrder: 0,
  template: template(pluginContext),
});
