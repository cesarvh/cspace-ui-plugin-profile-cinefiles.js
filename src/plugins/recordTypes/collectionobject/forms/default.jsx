import { defineMessages } from 'react-intl';

const template = (pluginContext) => {
  const {
    React,
  } = pluginContext.lib;

  const {
    Panel,
    Row,
    Col,
    Cols,
  } = pluginContext.layoutComponents;

  const {
    Field,
    InputTable,
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
            {/* <Field name="numberOfObjects" /> */}

            <Field name="responsibleDepartments">
              <Field name="responsibleDepartment" />
            </Field>

            <Field name="collection" />

            <InputTable name="titleGroup">
              <Field name="docTitleArticle" subpath="ns2:collectionobjects_cinefiles" />
              <Field name="docTitle" subpath="ns2:collectionobjects_cinefiles" />
              <Field name="docDisplayName" subpath="ns2:collectionobjects_cinefiles" />
            </InputTable>

            <Field name="docType" subpath="ns2:collectionobjects_cinefiles" />

            <Field name="objectProductionDateGroupList">
              <Field name="objectProductionDateGroup" />
            </Field>

            <Field name="objectProductionPersonGroupList">
              <Field name="objectProductionPersonGroup">
                <Field name="objectProductionPerson" />
                <Field name="objectProductionPersonRole" />
              </Field>
            </Field>
          </Col>

          <Col>
            <Field name="source" subpath="ns2:collectionobjects_cinefiles" />
            <Row>
              <Col>
                <Field name="pageInfo" subpath="ns2:collectionobjects_cinefiles" />
                <Field name="accessCode" subpath="ns2:collectionobjects_cinefiles" />
              </Col>

              <Col>
                <Field name="numberOfObjects" />
                <Field name="recordStatus" />
              </Col>
            </Row>

            <Field name="briefDescriptions">
              <Field name="briefDescription" />
            </Field>

            <Field name="distinguishingFeatures" />

            <Field name="comments">
              <Field name="comment" />
            </Field>
          </Col>
        </Row>

        <Row>
          <Field name="hasCastCr" subpath="ns2:collectionobjects_cinefiles" />
          <Field name="hasTechCr" subpath="ns2:collectionobjects_cinefiles" />
          <Field name="hasBoxInfo" subpath="ns2:collectionobjects_cinefiles" />
          <Field name="hasFilmog" subpath="ns2:collectionobjects_cinefiles" />
          <Field name="hasBiblio" subpath="ns2:collectionobjects_cinefiles" />
          <Field name="hasDistCo" subpath="ns2:collectionobjects_cinefiles" />
          <Field name="hasProdCo" subpath="ns2:collectionobjects_cinefiles" />
          <Field name="hasCostInfo" subpath="ns2:collectionobjects_cinefiles" />
          <Field name="hasIllust" subpath="ns2:collectionobjects_cinefiles" />
        </Row>

        <Cols>
          <Col>
            <Field name="docLanguages" subpath="ns2:collectionobjects_cinefiles">
              <Field name="docLanguage" />
            </Field>
            <Field name="docSubjects" subpath="ns2:collectionobjects_cinefiles">
              <Field name="docSubject" />
            </Field>
          </Col>

          <Col>
            <Field name="filmSubjects" subpath="ns2:collectionobjects_cinefiles">
              <Field name="filmSubject" />
            </Field>
            <Field name="nameSubjects" subpath="ns2:collectionobjects_cinefiles">
              <Field name="nameSubject" />
            </Field>
          </Col>
        </Cols>
      </Panel>

      <Panel name="desc" collapsible collapsed>
        <Row>
          <Field name="copyNumber" />
          <Field name="editionNumber" />
        </Row>

        {extensions.dimension.form}
        <Row>
          <Field name="objectStatusList">
            <Field name="objectStatus" />
          </Field>

          <Field name="colors">
            <Field name="color" />
          </Field>
        </Row>


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

      <Panel name="reference" collapsible collapsed>
        <Field name="referenceGroupList">
          <Field name="referenceGroup">
            <Field name="reference" />
            <Field name="referenceNote" />
          </Field>
        </Field>
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
