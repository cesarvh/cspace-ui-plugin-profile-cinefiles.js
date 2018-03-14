import { defineMessages } from 'react-intl';

const template = (pluginContext) => {
  const {
    React,
  } = pluginContext.lib;

  const {
    Panel,
    Row,
    Cols,
    Col,
  } = pluginContext.layoutComponents;

  const {
    Field,
    InputTable,
  } = pluginContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="info" collapsible>
        <Field name="workTermGroupList">
          <Field name="workTermGroup">
            <Panel>
              <Row>
                <Field name="termQualifier" />
                <Field name="termName" />
                <Field name="termDisplayName" />
                <Field name="termStatus" />
              </Row>

              <Row>
                <Field name="termType" />
                <Field name="termFlag" />
                <Field name="termLanguage" />
                <Field name="termPrefForLang" />
              </Row>

              <InputTable name="termSource">
                <Field name="termSource" />
                <Field name="termSourceDetail" />
                <Field name="termSourceID" />
                <Field name="termSourceNote" />
              </InputTable>
            </Panel>
          </Field>
        </Field>

        <Cols>
          <Col>
            <Field name="workType" />
            <Field name="creatorGroupList">
              <Field name="creatorGroup">
                <Field name="creator" />
                <Field name="creatorType" />
              </Field>
            </Field>

            <Field name="workDateGroupList">
              <Field name="workDateGroup">
                <Field name="workDate" />
              </Field>
            </Field>

            <Field name="genres" subpath="ns2:works_cinefiles">
              <Field name="genre" />
            </Field>

            <Field name="countries" subpath="ns2:works_cinefiles">
              <Field name="country" />
            </Field>

            <Field name="languages" subpath="ns2:works_cinefiles">
              <Field name="language" />
            </Field>
          </Col>

          <Col>
            <Field name="publisherGroupList">
              <Field name="publisherGroup">
                <Field name="publisher" />
                <Field name="publisherType" />
              </Field>
            </Field>

            <Field name="subjects" subpath="ns2:works_cinefiles">
              <Field name="subject" />
            </Field>

            <Field name="themes" subpath="ns2:works_cinefiles">
              <Field name="theme" />
            </Field>

            <Field name="workHistoryNote" />
          </Col>
        </Cols>

        {/* TODO: Break out address group */}

        <Field name="addrGroupList">
          <Field name="addrGroup">
            <Panel>
              <Cols>
                <Col>
                  <Field name="addressPlace1" />
                  <Field name="addressPlace2" />
                  <Field name="addressMunicipality" />

                </Col>

                <Col>
                  <Row>
                    <Field name="addressStateOrProvince" />
                    <Field name="addressPostCode" />
                  </Row>

                  <Field name="addressCountry" />

                  <Row>
                    <Col>
                      <Field name="addressType" />
                    </Col>

                    <Col />
                  </Row>
                </Col>
              </Cols>
            </Panel>
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
      id: 'form.work.default.name',
      defaultMessage: 'Standard Template',
    },
  }),
  template: template(pluginContext),
});
