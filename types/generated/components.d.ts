import type { Struct, Schema } from '@strapi/strapi';

export interface DefaultTestCompletion extends Struct.ComponentSchema {
  collectionName: 'components_default_test_completions';
  info: {
    displayName: 'Test Completion';
    description: '';
  };
  attributes: {
    Functional_testing: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    Automated_Testing: Schema.Attribute.Boolean;
    performance_testing: Schema.Attribute.Component<
      'default.performance-testing',
      false
    >;
  };
}

export interface DefaultPerformanceTesting extends Struct.ComponentSchema {
  collectionName: 'components_default_performance_testings';
  info: {
    displayName: 'Performance Testing';
  };
  attributes: {
    internal_performance_done: Schema.Attribute.Boolean;
    internal_performance_test_done: Schema.Attribute.Boolean;
    testing_representative_of_cur_prod_vol: Schema.Attribute.String;
    slo_published: Schema.Attribute.Boolean;
    tuned_for_slo: Schema.Attribute.Boolean;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'default.test-completion': DefaultTestCompletion;
      'default.performance-testing': DefaultPerformanceTesting;
    }
  }
}
