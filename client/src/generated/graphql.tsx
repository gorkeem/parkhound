import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  json: any;
  timestamptz: any;
  uuid: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** expression to compare columns of type Float. All fields are combined with logical 'AND'. */
export type Float_Comparison_Exp = {
  _eq?: Maybe<Scalars['Float']>;
  _gt?: Maybe<Scalars['Float']>;
  _gte?: Maybe<Scalars['Float']>;
  _in?: Maybe<Array<Scalars['Float']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Float']>;
  _lte?: Maybe<Scalars['Float']>;
  _neq?: Maybe<Scalars['Float']>;
  _nin?: Maybe<Array<Scalars['Float']>>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

export type NearbySpacesInput = {
  lat: Scalars['Float'];
  lng: Scalars['Float'];
};

export type NearbySpacesOutput = {
  __typename?: 'NearbySpacesOutput';
  distance: Scalars['Float'];
  parking_lot?: Maybe<Parking_Lot>;
  parking_lot_id: Scalars['Int'];
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};


/** expression to compare columns of type bigint. All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: Maybe<Scalars['bigint']>;
  _gt?: Maybe<Scalars['bigint']>;
  _gte?: Maybe<Scalars['bigint']>;
  _in?: Maybe<Array<Scalars['bigint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bigint']>;
  _lte?: Maybe<Scalars['bigint']>;
  _neq?: Maybe<Scalars['bigint']>;
  _nin?: Maybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "favorites" */
export type Favorites = {
  __typename?: 'favorites';
  /** An object relationship */
  parking_lot: Parking_Lot;
  parking_lot_id: Scalars['Int'];
  /** An object relationship */
  user: User;
  user_id: Scalars['Int'];
};

/** aggregated selection of "favorites" */
export type Favorites_Aggregate = {
  __typename?: 'favorites_aggregate';
  aggregate?: Maybe<Favorites_Aggregate_Fields>;
  nodes: Array<Favorites>;
};

/** aggregate fields of "favorites" */
export type Favorites_Aggregate_Fields = {
  __typename?: 'favorites_aggregate_fields';
  avg?: Maybe<Favorites_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Favorites_Max_Fields>;
  min?: Maybe<Favorites_Min_Fields>;
  stddev?: Maybe<Favorites_Stddev_Fields>;
  stddev_pop?: Maybe<Favorites_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Favorites_Stddev_Samp_Fields>;
  sum?: Maybe<Favorites_Sum_Fields>;
  var_pop?: Maybe<Favorites_Var_Pop_Fields>;
  var_samp?: Maybe<Favorites_Var_Samp_Fields>;
  variance?: Maybe<Favorites_Variance_Fields>;
};


/** aggregate fields of "favorites" */
export type Favorites_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Favorites_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "favorites" */
export type Favorites_Aggregate_Order_By = {
  avg?: Maybe<Favorites_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Favorites_Max_Order_By>;
  min?: Maybe<Favorites_Min_Order_By>;
  stddev?: Maybe<Favorites_Stddev_Order_By>;
  stddev_pop?: Maybe<Favorites_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Favorites_Stddev_Samp_Order_By>;
  sum?: Maybe<Favorites_Sum_Order_By>;
  var_pop?: Maybe<Favorites_Var_Pop_Order_By>;
  var_samp?: Maybe<Favorites_Var_Samp_Order_By>;
  variance?: Maybe<Favorites_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "favorites" */
export type Favorites_Arr_Rel_Insert_Input = {
  data: Array<Favorites_Insert_Input>;
  on_conflict?: Maybe<Favorites_On_Conflict>;
};

/** aggregate avg on columns */
export type Favorites_Avg_Fields = {
  __typename?: 'favorites_avg_fields';
  parking_lot_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "favorites" */
export type Favorites_Avg_Order_By = {
  parking_lot_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "favorites". All fields are combined with a logical 'AND'. */
export type Favorites_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Favorites_Bool_Exp>>>;
  _not?: Maybe<Favorites_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Favorites_Bool_Exp>>>;
  parking_lot?: Maybe<Parking_Lot_Bool_Exp>;
  parking_lot_id?: Maybe<Int_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "favorites" */
export enum Favorites_Constraint {
  /** unique or primary key constraint */
  FavoritesUserIdParkingLotIdUnique = 'favorites_user_id_parking_lot_id_unique'
}

/** input type for incrementing integer column in table "favorites" */
export type Favorites_Inc_Input = {
  parking_lot_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "favorites" */
export type Favorites_Insert_Input = {
  parking_lot?: Maybe<Parking_Lot_Obj_Rel_Insert_Input>;
  parking_lot_id?: Maybe<Scalars['Int']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Favorites_Max_Fields = {
  __typename?: 'favorites_max_fields';
  parking_lot_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "favorites" */
export type Favorites_Max_Order_By = {
  parking_lot_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Favorites_Min_Fields = {
  __typename?: 'favorites_min_fields';
  parking_lot_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "favorites" */
export type Favorites_Min_Order_By = {
  parking_lot_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "favorites" */
export type Favorites_Mutation_Response = {
  __typename?: 'favorites_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Favorites>;
};

/** input type for inserting object relation for remote table "favorites" */
export type Favorites_Obj_Rel_Insert_Input = {
  data: Favorites_Insert_Input;
  on_conflict?: Maybe<Favorites_On_Conflict>;
};

/** on conflict condition type for table "favorites" */
export type Favorites_On_Conflict = {
  constraint: Favorites_Constraint;
  update_columns: Array<Favorites_Update_Column>;
  where?: Maybe<Favorites_Bool_Exp>;
};

/** ordering options when selecting data from "favorites" */
export type Favorites_Order_By = {
  parking_lot?: Maybe<Parking_Lot_Order_By>;
  parking_lot_id?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** select columns of table "favorites" */
export enum Favorites_Select_Column {
  /** column name */
  ParkingLotId = 'parking_lot_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "favorites" */
export type Favorites_Set_Input = {
  parking_lot_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Favorites_Stddev_Fields = {
  __typename?: 'favorites_stddev_fields';
  parking_lot_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "favorites" */
export type Favorites_Stddev_Order_By = {
  parking_lot_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Favorites_Stddev_Pop_Fields = {
  __typename?: 'favorites_stddev_pop_fields';
  parking_lot_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "favorites" */
export type Favorites_Stddev_Pop_Order_By = {
  parking_lot_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Favorites_Stddev_Samp_Fields = {
  __typename?: 'favorites_stddev_samp_fields';
  parking_lot_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "favorites" */
export type Favorites_Stddev_Samp_Order_By = {
  parking_lot_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Favorites_Sum_Fields = {
  __typename?: 'favorites_sum_fields';
  parking_lot_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "favorites" */
export type Favorites_Sum_Order_By = {
  parking_lot_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** update columns of table "favorites" */
export enum Favorites_Update_Column {
  /** column name */
  ParkingLotId = 'parking_lot_id',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Favorites_Var_Pop_Fields = {
  __typename?: 'favorites_var_pop_fields';
  parking_lot_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "favorites" */
export type Favorites_Var_Pop_Order_By = {
  parking_lot_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Favorites_Var_Samp_Fields = {
  __typename?: 'favorites_var_samp_fields';
  parking_lot_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "favorites" */
export type Favorites_Var_Samp_Order_By = {
  parking_lot_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Favorites_Variance_Fields = {
  __typename?: 'favorites_variance_fields';
  parking_lot_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "favorites" */
export type Favorites_Variance_Order_By = {
  parking_lot_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** columns and relationships of "institution" */
export type Institution = {
  __typename?: 'institution';
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  parking_lots: Array<Parking_Lot>;
  /** An aggregated array relationship */
  parking_lots_aggregate: Parking_Lot_Aggregate;
  /** An array relationship */
  user_institutions: Array<User_Institution>;
  /** An aggregated array relationship */
  user_institutions_aggregate: User_Institution_Aggregate;
};


/** columns and relationships of "institution" */
export type InstitutionParking_LotsArgs = {
  distinct_on?: Maybe<Array<Parking_Lot_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Parking_Lot_Order_By>>;
  where?: Maybe<Parking_Lot_Bool_Exp>;
};


/** columns and relationships of "institution" */
export type InstitutionParking_Lots_AggregateArgs = {
  distinct_on?: Maybe<Array<Parking_Lot_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Parking_Lot_Order_By>>;
  where?: Maybe<Parking_Lot_Bool_Exp>;
};


/** columns and relationships of "institution" */
export type InstitutionUser_InstitutionsArgs = {
  distinct_on?: Maybe<Array<User_Institution_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Institution_Order_By>>;
  where?: Maybe<User_Institution_Bool_Exp>;
};


/** columns and relationships of "institution" */
export type InstitutionUser_Institutions_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Institution_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Institution_Order_By>>;
  where?: Maybe<User_Institution_Bool_Exp>;
};

/** aggregated selection of "institution" */
export type Institution_Aggregate = {
  __typename?: 'institution_aggregate';
  aggregate?: Maybe<Institution_Aggregate_Fields>;
  nodes: Array<Institution>;
};

/** aggregate fields of "institution" */
export type Institution_Aggregate_Fields = {
  __typename?: 'institution_aggregate_fields';
  avg?: Maybe<Institution_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Institution_Max_Fields>;
  min?: Maybe<Institution_Min_Fields>;
  stddev?: Maybe<Institution_Stddev_Fields>;
  stddev_pop?: Maybe<Institution_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Institution_Stddev_Samp_Fields>;
  sum?: Maybe<Institution_Sum_Fields>;
  var_pop?: Maybe<Institution_Var_Pop_Fields>;
  var_samp?: Maybe<Institution_Var_Samp_Fields>;
  variance?: Maybe<Institution_Variance_Fields>;
};


/** aggregate fields of "institution" */
export type Institution_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Institution_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "institution" */
export type Institution_Aggregate_Order_By = {
  avg?: Maybe<Institution_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Institution_Max_Order_By>;
  min?: Maybe<Institution_Min_Order_By>;
  stddev?: Maybe<Institution_Stddev_Order_By>;
  stddev_pop?: Maybe<Institution_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Institution_Stddev_Samp_Order_By>;
  sum?: Maybe<Institution_Sum_Order_By>;
  var_pop?: Maybe<Institution_Var_Pop_Order_By>;
  var_samp?: Maybe<Institution_Var_Samp_Order_By>;
  variance?: Maybe<Institution_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "institution" */
export type Institution_Arr_Rel_Insert_Input = {
  data: Array<Institution_Insert_Input>;
  on_conflict?: Maybe<Institution_On_Conflict>;
};

/** aggregate avg on columns */
export type Institution_Avg_Fields = {
  __typename?: 'institution_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "institution" */
export type Institution_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "institution". All fields are combined with a logical 'AND'. */
export type Institution_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Institution_Bool_Exp>>>;
  _not?: Maybe<Institution_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Institution_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  parking_lots?: Maybe<Parking_Lot_Bool_Exp>;
  user_institutions?: Maybe<User_Institution_Bool_Exp>;
};

/** unique or primary key constraints on table "institution" */
export enum Institution_Constraint {
  /** unique or primary key constraint */
  InstitutionPkey = 'institution_pkey'
}

/** input type for incrementing integer column in table "institution" */
export type Institution_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "institution" */
export type Institution_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  parking_lots?: Maybe<Parking_Lot_Arr_Rel_Insert_Input>;
  user_institutions?: Maybe<User_Institution_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Institution_Max_Fields = {
  __typename?: 'institution_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "institution" */
export type Institution_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Institution_Min_Fields = {
  __typename?: 'institution_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "institution" */
export type Institution_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "institution" */
export type Institution_Mutation_Response = {
  __typename?: 'institution_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Institution>;
};

/** input type for inserting object relation for remote table "institution" */
export type Institution_Obj_Rel_Insert_Input = {
  data: Institution_Insert_Input;
  on_conflict?: Maybe<Institution_On_Conflict>;
};

/** on conflict condition type for table "institution" */
export type Institution_On_Conflict = {
  constraint: Institution_Constraint;
  update_columns: Array<Institution_Update_Column>;
  where?: Maybe<Institution_Bool_Exp>;
};

/** ordering options when selecting data from "institution" */
export type Institution_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  parking_lots_aggregate?: Maybe<Parking_Lot_Aggregate_Order_By>;
  user_institutions_aggregate?: Maybe<User_Institution_Aggregate_Order_By>;
};

/** primary key columns input for table: "institution" */
export type Institution_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "institution" */
export enum Institution_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "institution" */
export type Institution_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Institution_Stddev_Fields = {
  __typename?: 'institution_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "institution" */
export type Institution_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Institution_Stddev_Pop_Fields = {
  __typename?: 'institution_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "institution" */
export type Institution_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Institution_Stddev_Samp_Fields = {
  __typename?: 'institution_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "institution" */
export type Institution_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Institution_Sum_Fields = {
  __typename?: 'institution_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "institution" */
export type Institution_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "institution" */
export enum Institution_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Institution_Var_Pop_Fields = {
  __typename?: 'institution_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "institution" */
export type Institution_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Institution_Var_Samp_Fields = {
  __typename?: 'institution_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "institution" */
export type Institution_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Institution_Variance_Fields = {
  __typename?: 'institution_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "institution" */
export type Institution_Variance_Order_By = {
  id?: Maybe<Order_By>;
};


/** expression to compare columns of type json. All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: Maybe<Scalars['json']>;
  _gt?: Maybe<Scalars['json']>;
  _gte?: Maybe<Scalars['json']>;
  _in?: Maybe<Array<Scalars['json']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['json']>;
  _lte?: Maybe<Scalars['json']>;
  _neq?: Maybe<Scalars['json']>;
  _nin?: Maybe<Array<Scalars['json']>>;
};

/** columns and relationships of "knex_migrations" */
export type Knex_Migrations = {
  __typename?: 'knex_migrations';
  batch?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  migration_time?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregated selection of "knex_migrations" */
export type Knex_Migrations_Aggregate = {
  __typename?: 'knex_migrations_aggregate';
  aggregate?: Maybe<Knex_Migrations_Aggregate_Fields>;
  nodes: Array<Knex_Migrations>;
};

/** aggregate fields of "knex_migrations" */
export type Knex_Migrations_Aggregate_Fields = {
  __typename?: 'knex_migrations_aggregate_fields';
  avg?: Maybe<Knex_Migrations_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Knex_Migrations_Max_Fields>;
  min?: Maybe<Knex_Migrations_Min_Fields>;
  stddev?: Maybe<Knex_Migrations_Stddev_Fields>;
  stddev_pop?: Maybe<Knex_Migrations_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Knex_Migrations_Stddev_Samp_Fields>;
  sum?: Maybe<Knex_Migrations_Sum_Fields>;
  var_pop?: Maybe<Knex_Migrations_Var_Pop_Fields>;
  var_samp?: Maybe<Knex_Migrations_Var_Samp_Fields>;
  variance?: Maybe<Knex_Migrations_Variance_Fields>;
};


/** aggregate fields of "knex_migrations" */
export type Knex_Migrations_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Knex_Migrations_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "knex_migrations" */
export type Knex_Migrations_Aggregate_Order_By = {
  avg?: Maybe<Knex_Migrations_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Knex_Migrations_Max_Order_By>;
  min?: Maybe<Knex_Migrations_Min_Order_By>;
  stddev?: Maybe<Knex_Migrations_Stddev_Order_By>;
  stddev_pop?: Maybe<Knex_Migrations_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Knex_Migrations_Stddev_Samp_Order_By>;
  sum?: Maybe<Knex_Migrations_Sum_Order_By>;
  var_pop?: Maybe<Knex_Migrations_Var_Pop_Order_By>;
  var_samp?: Maybe<Knex_Migrations_Var_Samp_Order_By>;
  variance?: Maybe<Knex_Migrations_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "knex_migrations" */
export type Knex_Migrations_Arr_Rel_Insert_Input = {
  data: Array<Knex_Migrations_Insert_Input>;
  on_conflict?: Maybe<Knex_Migrations_On_Conflict>;
};

/** aggregate avg on columns */
export type Knex_Migrations_Avg_Fields = {
  __typename?: 'knex_migrations_avg_fields';
  batch?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "knex_migrations" */
export type Knex_Migrations_Avg_Order_By = {
  batch?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "knex_migrations". All fields are combined with a logical 'AND'. */
export type Knex_Migrations_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Knex_Migrations_Bool_Exp>>>;
  _not?: Maybe<Knex_Migrations_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Knex_Migrations_Bool_Exp>>>;
  batch?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  migration_time?: Maybe<Timestamptz_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "knex_migrations" */
export enum Knex_Migrations_Constraint {
  /** unique or primary key constraint */
  KnexMigrationsPkey = 'knex_migrations_pkey'
}

/** input type for incrementing integer column in table "knex_migrations" */
export type Knex_Migrations_Inc_Input = {
  batch?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "knex_migrations" */
export type Knex_Migrations_Insert_Input = {
  batch?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  migration_time?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
};

/** columns and relationships of "knex_migrations_lock" */
export type Knex_Migrations_Lock = {
  __typename?: 'knex_migrations_lock';
  index: Scalars['Int'];
  is_locked?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "knex_migrations_lock" */
export type Knex_Migrations_Lock_Aggregate = {
  __typename?: 'knex_migrations_lock_aggregate';
  aggregate?: Maybe<Knex_Migrations_Lock_Aggregate_Fields>;
  nodes: Array<Knex_Migrations_Lock>;
};

/** aggregate fields of "knex_migrations_lock" */
export type Knex_Migrations_Lock_Aggregate_Fields = {
  __typename?: 'knex_migrations_lock_aggregate_fields';
  avg?: Maybe<Knex_Migrations_Lock_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Knex_Migrations_Lock_Max_Fields>;
  min?: Maybe<Knex_Migrations_Lock_Min_Fields>;
  stddev?: Maybe<Knex_Migrations_Lock_Stddev_Fields>;
  stddev_pop?: Maybe<Knex_Migrations_Lock_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Knex_Migrations_Lock_Stddev_Samp_Fields>;
  sum?: Maybe<Knex_Migrations_Lock_Sum_Fields>;
  var_pop?: Maybe<Knex_Migrations_Lock_Var_Pop_Fields>;
  var_samp?: Maybe<Knex_Migrations_Lock_Var_Samp_Fields>;
  variance?: Maybe<Knex_Migrations_Lock_Variance_Fields>;
};


/** aggregate fields of "knex_migrations_lock" */
export type Knex_Migrations_Lock_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Knex_Migrations_Lock_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "knex_migrations_lock" */
export type Knex_Migrations_Lock_Aggregate_Order_By = {
  avg?: Maybe<Knex_Migrations_Lock_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Knex_Migrations_Lock_Max_Order_By>;
  min?: Maybe<Knex_Migrations_Lock_Min_Order_By>;
  stddev?: Maybe<Knex_Migrations_Lock_Stddev_Order_By>;
  stddev_pop?: Maybe<Knex_Migrations_Lock_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Knex_Migrations_Lock_Stddev_Samp_Order_By>;
  sum?: Maybe<Knex_Migrations_Lock_Sum_Order_By>;
  var_pop?: Maybe<Knex_Migrations_Lock_Var_Pop_Order_By>;
  var_samp?: Maybe<Knex_Migrations_Lock_Var_Samp_Order_By>;
  variance?: Maybe<Knex_Migrations_Lock_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "knex_migrations_lock" */
export type Knex_Migrations_Lock_Arr_Rel_Insert_Input = {
  data: Array<Knex_Migrations_Lock_Insert_Input>;
  on_conflict?: Maybe<Knex_Migrations_Lock_On_Conflict>;
};

/** aggregate avg on columns */
export type Knex_Migrations_Lock_Avg_Fields = {
  __typename?: 'knex_migrations_lock_avg_fields';
  index?: Maybe<Scalars['Float']>;
  is_locked?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "knex_migrations_lock" */
export type Knex_Migrations_Lock_Avg_Order_By = {
  index?: Maybe<Order_By>;
  is_locked?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "knex_migrations_lock". All fields are combined with a logical 'AND'. */
export type Knex_Migrations_Lock_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Knex_Migrations_Lock_Bool_Exp>>>;
  _not?: Maybe<Knex_Migrations_Lock_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Knex_Migrations_Lock_Bool_Exp>>>;
  index?: Maybe<Int_Comparison_Exp>;
  is_locked?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "knex_migrations_lock" */
export enum Knex_Migrations_Lock_Constraint {
  /** unique or primary key constraint */
  KnexMigrationsLockPkey = 'knex_migrations_lock_pkey'
}

/** input type for incrementing integer column in table "knex_migrations_lock" */
export type Knex_Migrations_Lock_Inc_Input = {
  index?: Maybe<Scalars['Int']>;
  is_locked?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "knex_migrations_lock" */
export type Knex_Migrations_Lock_Insert_Input = {
  index?: Maybe<Scalars['Int']>;
  is_locked?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Knex_Migrations_Lock_Max_Fields = {
  __typename?: 'knex_migrations_lock_max_fields';
  index?: Maybe<Scalars['Int']>;
  is_locked?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "knex_migrations_lock" */
export type Knex_Migrations_Lock_Max_Order_By = {
  index?: Maybe<Order_By>;
  is_locked?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Knex_Migrations_Lock_Min_Fields = {
  __typename?: 'knex_migrations_lock_min_fields';
  index?: Maybe<Scalars['Int']>;
  is_locked?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "knex_migrations_lock" */
export type Knex_Migrations_Lock_Min_Order_By = {
  index?: Maybe<Order_By>;
  is_locked?: Maybe<Order_By>;
};

/** response of any mutation on the table "knex_migrations_lock" */
export type Knex_Migrations_Lock_Mutation_Response = {
  __typename?: 'knex_migrations_lock_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Knex_Migrations_Lock>;
};

/** input type for inserting object relation for remote table "knex_migrations_lock" */
export type Knex_Migrations_Lock_Obj_Rel_Insert_Input = {
  data: Knex_Migrations_Lock_Insert_Input;
  on_conflict?: Maybe<Knex_Migrations_Lock_On_Conflict>;
};

/** on conflict condition type for table "knex_migrations_lock" */
export type Knex_Migrations_Lock_On_Conflict = {
  constraint: Knex_Migrations_Lock_Constraint;
  update_columns: Array<Knex_Migrations_Lock_Update_Column>;
  where?: Maybe<Knex_Migrations_Lock_Bool_Exp>;
};

/** ordering options when selecting data from "knex_migrations_lock" */
export type Knex_Migrations_Lock_Order_By = {
  index?: Maybe<Order_By>;
  is_locked?: Maybe<Order_By>;
};

/** primary key columns input for table: "knex_migrations_lock" */
export type Knex_Migrations_Lock_Pk_Columns_Input = {
  index: Scalars['Int'];
};

/** select columns of table "knex_migrations_lock" */
export enum Knex_Migrations_Lock_Select_Column {
  /** column name */
  Index = 'index',
  /** column name */
  IsLocked = 'is_locked'
}

/** input type for updating data in table "knex_migrations_lock" */
export type Knex_Migrations_Lock_Set_Input = {
  index?: Maybe<Scalars['Int']>;
  is_locked?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Knex_Migrations_Lock_Stddev_Fields = {
  __typename?: 'knex_migrations_lock_stddev_fields';
  index?: Maybe<Scalars['Float']>;
  is_locked?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "knex_migrations_lock" */
export type Knex_Migrations_Lock_Stddev_Order_By = {
  index?: Maybe<Order_By>;
  is_locked?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Knex_Migrations_Lock_Stddev_Pop_Fields = {
  __typename?: 'knex_migrations_lock_stddev_pop_fields';
  index?: Maybe<Scalars['Float']>;
  is_locked?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "knex_migrations_lock" */
export type Knex_Migrations_Lock_Stddev_Pop_Order_By = {
  index?: Maybe<Order_By>;
  is_locked?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Knex_Migrations_Lock_Stddev_Samp_Fields = {
  __typename?: 'knex_migrations_lock_stddev_samp_fields';
  index?: Maybe<Scalars['Float']>;
  is_locked?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "knex_migrations_lock" */
export type Knex_Migrations_Lock_Stddev_Samp_Order_By = {
  index?: Maybe<Order_By>;
  is_locked?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Knex_Migrations_Lock_Sum_Fields = {
  __typename?: 'knex_migrations_lock_sum_fields';
  index?: Maybe<Scalars['Int']>;
  is_locked?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "knex_migrations_lock" */
export type Knex_Migrations_Lock_Sum_Order_By = {
  index?: Maybe<Order_By>;
  is_locked?: Maybe<Order_By>;
};

/** update columns of table "knex_migrations_lock" */
export enum Knex_Migrations_Lock_Update_Column {
  /** column name */
  Index = 'index',
  /** column name */
  IsLocked = 'is_locked'
}

/** aggregate var_pop on columns */
export type Knex_Migrations_Lock_Var_Pop_Fields = {
  __typename?: 'knex_migrations_lock_var_pop_fields';
  index?: Maybe<Scalars['Float']>;
  is_locked?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "knex_migrations_lock" */
export type Knex_Migrations_Lock_Var_Pop_Order_By = {
  index?: Maybe<Order_By>;
  is_locked?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Knex_Migrations_Lock_Var_Samp_Fields = {
  __typename?: 'knex_migrations_lock_var_samp_fields';
  index?: Maybe<Scalars['Float']>;
  is_locked?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "knex_migrations_lock" */
export type Knex_Migrations_Lock_Var_Samp_Order_By = {
  index?: Maybe<Order_By>;
  is_locked?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Knex_Migrations_Lock_Variance_Fields = {
  __typename?: 'knex_migrations_lock_variance_fields';
  index?: Maybe<Scalars['Float']>;
  is_locked?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "knex_migrations_lock" */
export type Knex_Migrations_Lock_Variance_Order_By = {
  index?: Maybe<Order_By>;
  is_locked?: Maybe<Order_By>;
};

/** aggregate max on columns */
export type Knex_Migrations_Max_Fields = {
  __typename?: 'knex_migrations_max_fields';
  batch?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  migration_time?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "knex_migrations" */
export type Knex_Migrations_Max_Order_By = {
  batch?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  migration_time?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Knex_Migrations_Min_Fields = {
  __typename?: 'knex_migrations_min_fields';
  batch?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  migration_time?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "knex_migrations" */
export type Knex_Migrations_Min_Order_By = {
  batch?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  migration_time?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "knex_migrations" */
export type Knex_Migrations_Mutation_Response = {
  __typename?: 'knex_migrations_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Knex_Migrations>;
};

/** input type for inserting object relation for remote table "knex_migrations" */
export type Knex_Migrations_Obj_Rel_Insert_Input = {
  data: Knex_Migrations_Insert_Input;
  on_conflict?: Maybe<Knex_Migrations_On_Conflict>;
};

/** on conflict condition type for table "knex_migrations" */
export type Knex_Migrations_On_Conflict = {
  constraint: Knex_Migrations_Constraint;
  update_columns: Array<Knex_Migrations_Update_Column>;
  where?: Maybe<Knex_Migrations_Bool_Exp>;
};

/** ordering options when selecting data from "knex_migrations" */
export type Knex_Migrations_Order_By = {
  batch?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  migration_time?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "knex_migrations" */
export type Knex_Migrations_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "knex_migrations" */
export enum Knex_Migrations_Select_Column {
  /** column name */
  Batch = 'batch',
  /** column name */
  Id = 'id',
  /** column name */
  MigrationTime = 'migration_time',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "knex_migrations" */
export type Knex_Migrations_Set_Input = {
  batch?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  migration_time?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Knex_Migrations_Stddev_Fields = {
  __typename?: 'knex_migrations_stddev_fields';
  batch?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "knex_migrations" */
export type Knex_Migrations_Stddev_Order_By = {
  batch?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Knex_Migrations_Stddev_Pop_Fields = {
  __typename?: 'knex_migrations_stddev_pop_fields';
  batch?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "knex_migrations" */
export type Knex_Migrations_Stddev_Pop_Order_By = {
  batch?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Knex_Migrations_Stddev_Samp_Fields = {
  __typename?: 'knex_migrations_stddev_samp_fields';
  batch?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "knex_migrations" */
export type Knex_Migrations_Stddev_Samp_Order_By = {
  batch?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Knex_Migrations_Sum_Fields = {
  __typename?: 'knex_migrations_sum_fields';
  batch?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "knex_migrations" */
export type Knex_Migrations_Sum_Order_By = {
  batch?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** update columns of table "knex_migrations" */
export enum Knex_Migrations_Update_Column {
  /** column name */
  Batch = 'batch',
  /** column name */
  Id = 'id',
  /** column name */
  MigrationTime = 'migration_time',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Knex_Migrations_Var_Pop_Fields = {
  __typename?: 'knex_migrations_var_pop_fields';
  batch?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "knex_migrations" */
export type Knex_Migrations_Var_Pop_Order_By = {
  batch?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Knex_Migrations_Var_Samp_Fields = {
  __typename?: 'knex_migrations_var_samp_fields';
  batch?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "knex_migrations" */
export type Knex_Migrations_Var_Samp_Order_By = {
  batch?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Knex_Migrations_Variance_Fields = {
  __typename?: 'knex_migrations_variance_fields';
  batch?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "knex_migrations" */
export type Knex_Migrations_Variance_Order_By = {
  batch?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** columns and relationships of "location" */
export type Location = {
  __typename?: 'location';
  address?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  /** An array relationship */
  parking_lots: Array<Parking_Lot>;
  /** An aggregated array relationship */
  parking_lots_aggregate: Parking_Lot_Aggregate;
};


/** columns and relationships of "location" */
export type LocationParking_LotsArgs = {
  distinct_on?: Maybe<Array<Parking_Lot_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Parking_Lot_Order_By>>;
  where?: Maybe<Parking_Lot_Bool_Exp>;
};


/** columns and relationships of "location" */
export type LocationParking_Lots_AggregateArgs = {
  distinct_on?: Maybe<Array<Parking_Lot_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Parking_Lot_Order_By>>;
  where?: Maybe<Parking_Lot_Bool_Exp>;
};

/** aggregated selection of "location" */
export type Location_Aggregate = {
  __typename?: 'location_aggregate';
  aggregate?: Maybe<Location_Aggregate_Fields>;
  nodes: Array<Location>;
};

/** aggregate fields of "location" */
export type Location_Aggregate_Fields = {
  __typename?: 'location_aggregate_fields';
  avg?: Maybe<Location_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Location_Max_Fields>;
  min?: Maybe<Location_Min_Fields>;
  stddev?: Maybe<Location_Stddev_Fields>;
  stddev_pop?: Maybe<Location_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Location_Stddev_Samp_Fields>;
  sum?: Maybe<Location_Sum_Fields>;
  var_pop?: Maybe<Location_Var_Pop_Fields>;
  var_samp?: Maybe<Location_Var_Samp_Fields>;
  variance?: Maybe<Location_Variance_Fields>;
};


/** aggregate fields of "location" */
export type Location_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Location_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "location" */
export type Location_Aggregate_Order_By = {
  avg?: Maybe<Location_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Location_Max_Order_By>;
  min?: Maybe<Location_Min_Order_By>;
  stddev?: Maybe<Location_Stddev_Order_By>;
  stddev_pop?: Maybe<Location_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Location_Stddev_Samp_Order_By>;
  sum?: Maybe<Location_Sum_Order_By>;
  var_pop?: Maybe<Location_Var_Pop_Order_By>;
  var_samp?: Maybe<Location_Var_Samp_Order_By>;
  variance?: Maybe<Location_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "location" */
export type Location_Arr_Rel_Insert_Input = {
  data: Array<Location_Insert_Input>;
  on_conflict?: Maybe<Location_On_Conflict>;
};

/** aggregate avg on columns */
export type Location_Avg_Fields = {
  __typename?: 'location_avg_fields';
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "location" */
export type Location_Avg_Order_By = {
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "location". All fields are combined with a logical 'AND'. */
export type Location_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Location_Bool_Exp>>>;
  _not?: Maybe<Location_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Location_Bool_Exp>>>;
  address?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  latitude?: Maybe<Float_Comparison_Exp>;
  longitude?: Maybe<Float_Comparison_Exp>;
  parking_lots?: Maybe<Parking_Lot_Bool_Exp>;
};

/** unique or primary key constraints on table "location" */
export enum Location_Constraint {
  /** unique or primary key constraint */
  LocationPkey = 'location_pkey'
}

/** input type for incrementing integer column in table "location" */
export type Location_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** input type for inserting data into table "location" */
export type Location_Insert_Input = {
  address?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  parking_lots?: Maybe<Parking_Lot_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Location_Max_Fields = {
  __typename?: 'location_max_fields';
  address?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** order by max() on columns of table "location" */
export type Location_Max_Order_By = {
  address?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Location_Min_Fields = {
  __typename?: 'location_min_fields';
  address?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** order by min() on columns of table "location" */
export type Location_Min_Order_By = {
  address?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
};

/** response of any mutation on the table "location" */
export type Location_Mutation_Response = {
  __typename?: 'location_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Location>;
};

/** input type for inserting object relation for remote table "location" */
export type Location_Obj_Rel_Insert_Input = {
  data: Location_Insert_Input;
  on_conflict?: Maybe<Location_On_Conflict>;
};

/** on conflict condition type for table "location" */
export type Location_On_Conflict = {
  constraint: Location_Constraint;
  update_columns: Array<Location_Update_Column>;
  where?: Maybe<Location_Bool_Exp>;
};

/** ordering options when selecting data from "location" */
export type Location_Order_By = {
  address?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  parking_lots_aggregate?: Maybe<Parking_Lot_Aggregate_Order_By>;
};

/** primary key columns input for table: "location" */
export type Location_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "location" */
export enum Location_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Id = 'id',
  /** column name */
  Latitude = 'latitude',
  /** column name */
  Longitude = 'longitude'
}

/** input type for updating data in table "location" */
export type Location_Set_Input = {
  address?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** aggregate stddev on columns */
export type Location_Stddev_Fields = {
  __typename?: 'location_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "location" */
export type Location_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Location_Stddev_Pop_Fields = {
  __typename?: 'location_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "location" */
export type Location_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Location_Stddev_Samp_Fields = {
  __typename?: 'location_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "location" */
export type Location_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Location_Sum_Fields = {
  __typename?: 'location_sum_fields';
  id?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** order by sum() on columns of table "location" */
export type Location_Sum_Order_By = {
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
};

/** update columns of table "location" */
export enum Location_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Id = 'id',
  /** column name */
  Latitude = 'latitude',
  /** column name */
  Longitude = 'longitude'
}

/** aggregate var_pop on columns */
export type Location_Var_Pop_Fields = {
  __typename?: 'location_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "location" */
export type Location_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Location_Var_Samp_Fields = {
  __typename?: 'location_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "location" */
export type Location_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Location_Variance_Fields = {
  __typename?: 'location_variance_fields';
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "location" */
export type Location_Variance_Order_By = {
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
};

/** columns and relationships of "lot_row" */
export type Lot_Row = {
  __typename?: 'lot_row';
  id: Scalars['Int'];
  /** An object relationship */
  parking_lot: Parking_Lot;
  parking_lot_id: Scalars['Int'];
  /** An array relationship */
  parking_spaces: Array<Parking_Space>;
  /** An aggregated array relationship */
  parking_spaces_aggregate: Parking_Space_Aggregate;
};


/** columns and relationships of "lot_row" */
export type Lot_RowParking_SpacesArgs = {
  distinct_on?: Maybe<Array<Parking_Space_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Parking_Space_Order_By>>;
  where?: Maybe<Parking_Space_Bool_Exp>;
};


/** columns and relationships of "lot_row" */
export type Lot_RowParking_Spaces_AggregateArgs = {
  distinct_on?: Maybe<Array<Parking_Space_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Parking_Space_Order_By>>;
  where?: Maybe<Parking_Space_Bool_Exp>;
};

/** aggregated selection of "lot_row" */
export type Lot_Row_Aggregate = {
  __typename?: 'lot_row_aggregate';
  aggregate?: Maybe<Lot_Row_Aggregate_Fields>;
  nodes: Array<Lot_Row>;
};

/** aggregate fields of "lot_row" */
export type Lot_Row_Aggregate_Fields = {
  __typename?: 'lot_row_aggregate_fields';
  avg?: Maybe<Lot_Row_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Lot_Row_Max_Fields>;
  min?: Maybe<Lot_Row_Min_Fields>;
  stddev?: Maybe<Lot_Row_Stddev_Fields>;
  stddev_pop?: Maybe<Lot_Row_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Lot_Row_Stddev_Samp_Fields>;
  sum?: Maybe<Lot_Row_Sum_Fields>;
  var_pop?: Maybe<Lot_Row_Var_Pop_Fields>;
  var_samp?: Maybe<Lot_Row_Var_Samp_Fields>;
  variance?: Maybe<Lot_Row_Variance_Fields>;
};


/** aggregate fields of "lot_row" */
export type Lot_Row_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Lot_Row_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "lot_row" */
export type Lot_Row_Aggregate_Order_By = {
  avg?: Maybe<Lot_Row_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Lot_Row_Max_Order_By>;
  min?: Maybe<Lot_Row_Min_Order_By>;
  stddev?: Maybe<Lot_Row_Stddev_Order_By>;
  stddev_pop?: Maybe<Lot_Row_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Lot_Row_Stddev_Samp_Order_By>;
  sum?: Maybe<Lot_Row_Sum_Order_By>;
  var_pop?: Maybe<Lot_Row_Var_Pop_Order_By>;
  var_samp?: Maybe<Lot_Row_Var_Samp_Order_By>;
  variance?: Maybe<Lot_Row_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "lot_row" */
export type Lot_Row_Arr_Rel_Insert_Input = {
  data: Array<Lot_Row_Insert_Input>;
  on_conflict?: Maybe<Lot_Row_On_Conflict>;
};

/** aggregate avg on columns */
export type Lot_Row_Avg_Fields = {
  __typename?: 'lot_row_avg_fields';
  id?: Maybe<Scalars['Float']>;
  parking_lot_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "lot_row" */
export type Lot_Row_Avg_Order_By = {
  id?: Maybe<Order_By>;
  parking_lot_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "lot_row". All fields are combined with a logical 'AND'. */
export type Lot_Row_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Lot_Row_Bool_Exp>>>;
  _not?: Maybe<Lot_Row_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Lot_Row_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  parking_lot?: Maybe<Parking_Lot_Bool_Exp>;
  parking_lot_id?: Maybe<Int_Comparison_Exp>;
  parking_spaces?: Maybe<Parking_Space_Bool_Exp>;
};

/** unique or primary key constraints on table "lot_row" */
export enum Lot_Row_Constraint {
  /** unique or primary key constraint */
  LotRowPkey = 'lot_row_pkey'
}

/** input type for incrementing integer column in table "lot_row" */
export type Lot_Row_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  parking_lot_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "lot_row" */
export type Lot_Row_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  parking_lot?: Maybe<Parking_Lot_Obj_Rel_Insert_Input>;
  parking_lot_id?: Maybe<Scalars['Int']>;
  parking_spaces?: Maybe<Parking_Space_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Lot_Row_Max_Fields = {
  __typename?: 'lot_row_max_fields';
  id?: Maybe<Scalars['Int']>;
  parking_lot_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "lot_row" */
export type Lot_Row_Max_Order_By = {
  id?: Maybe<Order_By>;
  parking_lot_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Lot_Row_Min_Fields = {
  __typename?: 'lot_row_min_fields';
  id?: Maybe<Scalars['Int']>;
  parking_lot_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "lot_row" */
export type Lot_Row_Min_Order_By = {
  id?: Maybe<Order_By>;
  parking_lot_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "lot_row" */
export type Lot_Row_Mutation_Response = {
  __typename?: 'lot_row_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Lot_Row>;
};

/** input type for inserting object relation for remote table "lot_row" */
export type Lot_Row_Obj_Rel_Insert_Input = {
  data: Lot_Row_Insert_Input;
  on_conflict?: Maybe<Lot_Row_On_Conflict>;
};

/** on conflict condition type for table "lot_row" */
export type Lot_Row_On_Conflict = {
  constraint: Lot_Row_Constraint;
  update_columns: Array<Lot_Row_Update_Column>;
  where?: Maybe<Lot_Row_Bool_Exp>;
};

/** ordering options when selecting data from "lot_row" */
export type Lot_Row_Order_By = {
  id?: Maybe<Order_By>;
  parking_lot?: Maybe<Parking_Lot_Order_By>;
  parking_lot_id?: Maybe<Order_By>;
  parking_spaces_aggregate?: Maybe<Parking_Space_Aggregate_Order_By>;
};

/** primary key columns input for table: "lot_row" */
export type Lot_Row_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "lot_row" */
export enum Lot_Row_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ParkingLotId = 'parking_lot_id'
}

/** input type for updating data in table "lot_row" */
export type Lot_Row_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  parking_lot_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Lot_Row_Stddev_Fields = {
  __typename?: 'lot_row_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  parking_lot_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "lot_row" */
export type Lot_Row_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  parking_lot_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Lot_Row_Stddev_Pop_Fields = {
  __typename?: 'lot_row_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  parking_lot_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "lot_row" */
export type Lot_Row_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  parking_lot_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Lot_Row_Stddev_Samp_Fields = {
  __typename?: 'lot_row_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  parking_lot_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "lot_row" */
export type Lot_Row_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  parking_lot_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Lot_Row_Sum_Fields = {
  __typename?: 'lot_row_sum_fields';
  id?: Maybe<Scalars['Int']>;
  parking_lot_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "lot_row" */
export type Lot_Row_Sum_Order_By = {
  id?: Maybe<Order_By>;
  parking_lot_id?: Maybe<Order_By>;
};

/** update columns of table "lot_row" */
export enum Lot_Row_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ParkingLotId = 'parking_lot_id'
}

/** aggregate var_pop on columns */
export type Lot_Row_Var_Pop_Fields = {
  __typename?: 'lot_row_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  parking_lot_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "lot_row" */
export type Lot_Row_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  parking_lot_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Lot_Row_Var_Samp_Fields = {
  __typename?: 'lot_row_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  parking_lot_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "lot_row" */
export type Lot_Row_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  parking_lot_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Lot_Row_Variance_Fields = {
  __typename?: 'lot_row_variance_fields';
  id?: Maybe<Scalars['Float']>;
  parking_lot_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "lot_row" */
export type Lot_Row_Variance_Order_By = {
  id?: Maybe<Order_By>;
  parking_lot_id?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "favorites" */
  delete_favorites?: Maybe<Favorites_Mutation_Response>;
  /** delete data from the table: "institution" */
  delete_institution?: Maybe<Institution_Mutation_Response>;
  /** delete single row from the table: "institution" */
  delete_institution_by_pk?: Maybe<Institution>;
  /** delete data from the table: "knex_migrations" */
  delete_knex_migrations?: Maybe<Knex_Migrations_Mutation_Response>;
  /** delete single row from the table: "knex_migrations" */
  delete_knex_migrations_by_pk?: Maybe<Knex_Migrations>;
  /** delete data from the table: "knex_migrations_lock" */
  delete_knex_migrations_lock?: Maybe<Knex_Migrations_Lock_Mutation_Response>;
  /** delete single row from the table: "knex_migrations_lock" */
  delete_knex_migrations_lock_by_pk?: Maybe<Knex_Migrations_Lock>;
  /** delete data from the table: "location" */
  delete_location?: Maybe<Location_Mutation_Response>;
  /** delete single row from the table: "location" */
  delete_location_by_pk?: Maybe<Location>;
  /** delete data from the table: "lot_row" */
  delete_lot_row?: Maybe<Lot_Row_Mutation_Response>;
  /** delete single row from the table: "lot_row" */
  delete_lot_row_by_pk?: Maybe<Lot_Row>;
  /** delete data from the table: "parking_lot" */
  delete_parking_lot?: Maybe<Parking_Lot_Mutation_Response>;
  /** delete single row from the table: "parking_lot" */
  delete_parking_lot_by_pk?: Maybe<Parking_Lot>;
  /** delete data from the table: "parking_space" */
  delete_parking_space?: Maybe<Parking_Space_Mutation_Response>;
  /** delete single row from the table: "parking_space" */
  delete_parking_space_by_pk?: Maybe<Parking_Space>;
  /** delete data from the table: "past_lot_occupancy" */
  delete_past_lot_occupancy?: Maybe<Past_Lot_Occupancy_Mutation_Response>;
  /** delete single row from the table: "past_lot_occupancy" */
  delete_past_lot_occupancy_by_pk?: Maybe<Past_Lot_Occupancy>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** delete data from the table: "user_institution" */
  delete_user_institution?: Maybe<User_Institution_Mutation_Response>;
  /** insert data into the table: "favorites" */
  insert_favorites?: Maybe<Favorites_Mutation_Response>;
  /** insert a single row into the table: "favorites" */
  insert_favorites_one?: Maybe<Favorites>;
  /** insert data into the table: "institution" */
  insert_institution?: Maybe<Institution_Mutation_Response>;
  /** insert a single row into the table: "institution" */
  insert_institution_one?: Maybe<Institution>;
  /** insert data into the table: "knex_migrations" */
  insert_knex_migrations?: Maybe<Knex_Migrations_Mutation_Response>;
  /** insert data into the table: "knex_migrations_lock" */
  insert_knex_migrations_lock?: Maybe<Knex_Migrations_Lock_Mutation_Response>;
  /** insert a single row into the table: "knex_migrations_lock" */
  insert_knex_migrations_lock_one?: Maybe<Knex_Migrations_Lock>;
  /** insert a single row into the table: "knex_migrations" */
  insert_knex_migrations_one?: Maybe<Knex_Migrations>;
  /** insert data into the table: "location" */
  insert_location?: Maybe<Location_Mutation_Response>;
  /** insert a single row into the table: "location" */
  insert_location_one?: Maybe<Location>;
  /** insert data into the table: "lot_row" */
  insert_lot_row?: Maybe<Lot_Row_Mutation_Response>;
  /** insert a single row into the table: "lot_row" */
  insert_lot_row_one?: Maybe<Lot_Row>;
  /** insert data into the table: "parking_lot" */
  insert_parking_lot?: Maybe<Parking_Lot_Mutation_Response>;
  /** insert a single row into the table: "parking_lot" */
  insert_parking_lot_one?: Maybe<Parking_Lot>;
  /** insert data into the table: "parking_space" */
  insert_parking_space?: Maybe<Parking_Space_Mutation_Response>;
  /** insert a single row into the table: "parking_space" */
  insert_parking_space_one?: Maybe<Parking_Space>;
  /** insert data into the table: "past_lot_occupancy" */
  insert_past_lot_occupancy?: Maybe<Past_Lot_Occupancy_Mutation_Response>;
  /** insert a single row into the table: "past_lot_occupancy" */
  insert_past_lot_occupancy_one?: Maybe<Past_Lot_Occupancy>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert data into the table: "user_institution" */
  insert_user_institution?: Maybe<User_Institution_Mutation_Response>;
  /** insert a single row into the table: "user_institution" */
  insert_user_institution_one?: Maybe<User_Institution>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** update data of the table: "favorites" */
  update_favorites?: Maybe<Favorites_Mutation_Response>;
  /** update data of the table: "institution" */
  update_institution?: Maybe<Institution_Mutation_Response>;
  /** update single row of the table: "institution" */
  update_institution_by_pk?: Maybe<Institution>;
  /** update data of the table: "knex_migrations" */
  update_knex_migrations?: Maybe<Knex_Migrations_Mutation_Response>;
  /** update single row of the table: "knex_migrations" */
  update_knex_migrations_by_pk?: Maybe<Knex_Migrations>;
  /** update data of the table: "knex_migrations_lock" */
  update_knex_migrations_lock?: Maybe<Knex_Migrations_Lock_Mutation_Response>;
  /** update single row of the table: "knex_migrations_lock" */
  update_knex_migrations_lock_by_pk?: Maybe<Knex_Migrations_Lock>;
  /** update data of the table: "location" */
  update_location?: Maybe<Location_Mutation_Response>;
  /** update single row of the table: "location" */
  update_location_by_pk?: Maybe<Location>;
  /** update data of the table: "lot_row" */
  update_lot_row?: Maybe<Lot_Row_Mutation_Response>;
  /** update single row of the table: "lot_row" */
  update_lot_row_by_pk?: Maybe<Lot_Row>;
  /** update data of the table: "parking_lot" */
  update_parking_lot?: Maybe<Parking_Lot_Mutation_Response>;
  /** update single row of the table: "parking_lot" */
  update_parking_lot_by_pk?: Maybe<Parking_Lot>;
  /** update data of the table: "parking_space" */
  update_parking_space?: Maybe<Parking_Space_Mutation_Response>;
  /** update single row of the table: "parking_space" */
  update_parking_space_by_pk?: Maybe<Parking_Space>;
  /** update data of the table: "past_lot_occupancy" */
  update_past_lot_occupancy?: Maybe<Past_Lot_Occupancy_Mutation_Response>;
  /** update single row of the table: "past_lot_occupancy" */
  update_past_lot_occupancy_by_pk?: Maybe<Past_Lot_Occupancy>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
  /** update data of the table: "user_institution" */
  update_user_institution?: Maybe<User_Institution_Mutation_Response>;
};


/** mutation root */
export type Mutation_RootDelete_FavoritesArgs = {
  where: Favorites_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_InstitutionArgs = {
  where: Institution_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Institution_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Knex_MigrationsArgs = {
  where: Knex_Migrations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Knex_Migrations_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Knex_Migrations_LockArgs = {
  where: Knex_Migrations_Lock_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Knex_Migrations_Lock_By_PkArgs = {
  index: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_LocationArgs = {
  where: Location_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Location_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Lot_RowArgs = {
  where: Lot_Row_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Lot_Row_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Parking_LotArgs = {
  where: Parking_Lot_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Parking_Lot_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Parking_SpaceArgs = {
  where: Parking_Space_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Parking_Space_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Past_Lot_OccupancyArgs = {
  where: Past_Lot_Occupancy_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Past_Lot_Occupancy_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_User_InstitutionArgs = {
  where: User_Institution_Bool_Exp;
};


/** mutation root */
export type Mutation_RootInsert_FavoritesArgs = {
  objects: Array<Favorites_Insert_Input>;
  on_conflict?: Maybe<Favorites_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Favorites_OneArgs = {
  object: Favorites_Insert_Input;
  on_conflict?: Maybe<Favorites_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_InstitutionArgs = {
  objects: Array<Institution_Insert_Input>;
  on_conflict?: Maybe<Institution_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Institution_OneArgs = {
  object: Institution_Insert_Input;
  on_conflict?: Maybe<Institution_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Knex_MigrationsArgs = {
  objects: Array<Knex_Migrations_Insert_Input>;
  on_conflict?: Maybe<Knex_Migrations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Knex_Migrations_LockArgs = {
  objects: Array<Knex_Migrations_Lock_Insert_Input>;
  on_conflict?: Maybe<Knex_Migrations_Lock_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Knex_Migrations_Lock_OneArgs = {
  object: Knex_Migrations_Lock_Insert_Input;
  on_conflict?: Maybe<Knex_Migrations_Lock_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Knex_Migrations_OneArgs = {
  object: Knex_Migrations_Insert_Input;
  on_conflict?: Maybe<Knex_Migrations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_LocationArgs = {
  objects: Array<Location_Insert_Input>;
  on_conflict?: Maybe<Location_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Location_OneArgs = {
  object: Location_Insert_Input;
  on_conflict?: Maybe<Location_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Lot_RowArgs = {
  objects: Array<Lot_Row_Insert_Input>;
  on_conflict?: Maybe<Lot_Row_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Lot_Row_OneArgs = {
  object: Lot_Row_Insert_Input;
  on_conflict?: Maybe<Lot_Row_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Parking_LotArgs = {
  objects: Array<Parking_Lot_Insert_Input>;
  on_conflict?: Maybe<Parking_Lot_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Parking_Lot_OneArgs = {
  object: Parking_Lot_Insert_Input;
  on_conflict?: Maybe<Parking_Lot_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Parking_SpaceArgs = {
  objects: Array<Parking_Space_Insert_Input>;
  on_conflict?: Maybe<Parking_Space_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Parking_Space_OneArgs = {
  object: Parking_Space_Insert_Input;
  on_conflict?: Maybe<Parking_Space_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Past_Lot_OccupancyArgs = {
  objects: Array<Past_Lot_Occupancy_Insert_Input>;
  on_conflict?: Maybe<Past_Lot_Occupancy_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Past_Lot_Occupancy_OneArgs = {
  object: Past_Lot_Occupancy_Insert_Input;
  on_conflict?: Maybe<Past_Lot_Occupancy_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_InstitutionArgs = {
  objects: Array<User_Institution_Insert_Input>;
  on_conflict?: Maybe<User_Institution_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Institution_OneArgs = {
  object: User_Institution_Insert_Input;
  on_conflict?: Maybe<User_Institution_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_FavoritesArgs = {
  _inc?: Maybe<Favorites_Inc_Input>;
  _set?: Maybe<Favorites_Set_Input>;
  where: Favorites_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_InstitutionArgs = {
  _inc?: Maybe<Institution_Inc_Input>;
  _set?: Maybe<Institution_Set_Input>;
  where: Institution_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Institution_By_PkArgs = {
  _inc?: Maybe<Institution_Inc_Input>;
  _set?: Maybe<Institution_Set_Input>;
  pk_columns: Institution_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Knex_MigrationsArgs = {
  _inc?: Maybe<Knex_Migrations_Inc_Input>;
  _set?: Maybe<Knex_Migrations_Set_Input>;
  where: Knex_Migrations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Knex_Migrations_By_PkArgs = {
  _inc?: Maybe<Knex_Migrations_Inc_Input>;
  _set?: Maybe<Knex_Migrations_Set_Input>;
  pk_columns: Knex_Migrations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Knex_Migrations_LockArgs = {
  _inc?: Maybe<Knex_Migrations_Lock_Inc_Input>;
  _set?: Maybe<Knex_Migrations_Lock_Set_Input>;
  where: Knex_Migrations_Lock_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Knex_Migrations_Lock_By_PkArgs = {
  _inc?: Maybe<Knex_Migrations_Lock_Inc_Input>;
  _set?: Maybe<Knex_Migrations_Lock_Set_Input>;
  pk_columns: Knex_Migrations_Lock_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_LocationArgs = {
  _inc?: Maybe<Location_Inc_Input>;
  _set?: Maybe<Location_Set_Input>;
  where: Location_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Location_By_PkArgs = {
  _inc?: Maybe<Location_Inc_Input>;
  _set?: Maybe<Location_Set_Input>;
  pk_columns: Location_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Lot_RowArgs = {
  _inc?: Maybe<Lot_Row_Inc_Input>;
  _set?: Maybe<Lot_Row_Set_Input>;
  where: Lot_Row_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Lot_Row_By_PkArgs = {
  _inc?: Maybe<Lot_Row_Inc_Input>;
  _set?: Maybe<Lot_Row_Set_Input>;
  pk_columns: Lot_Row_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Parking_LotArgs = {
  _inc?: Maybe<Parking_Lot_Inc_Input>;
  _set?: Maybe<Parking_Lot_Set_Input>;
  where: Parking_Lot_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Parking_Lot_By_PkArgs = {
  _inc?: Maybe<Parking_Lot_Inc_Input>;
  _set?: Maybe<Parking_Lot_Set_Input>;
  pk_columns: Parking_Lot_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Parking_SpaceArgs = {
  _inc?: Maybe<Parking_Space_Inc_Input>;
  _set?: Maybe<Parking_Space_Set_Input>;
  where: Parking_Space_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Parking_Space_By_PkArgs = {
  _inc?: Maybe<Parking_Space_Inc_Input>;
  _set?: Maybe<Parking_Space_Set_Input>;
  pk_columns: Parking_Space_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Past_Lot_OccupancyArgs = {
  _inc?: Maybe<Past_Lot_Occupancy_Inc_Input>;
  _set?: Maybe<Past_Lot_Occupancy_Set_Input>;
  where: Past_Lot_Occupancy_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Past_Lot_Occupancy_By_PkArgs = {
  _inc?: Maybe<Past_Lot_Occupancy_Inc_Input>;
  _set?: Maybe<Past_Lot_Occupancy_Set_Input>;
  pk_columns: Past_Lot_Occupancy_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _inc?: Maybe<User_Inc_Input>;
  _set?: Maybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _inc?: Maybe<User_Inc_Input>;
  _set?: Maybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_InstitutionArgs = {
  _inc?: Maybe<User_Institution_Inc_Input>;
  _set?: Maybe<User_Institution_Set_Input>;
  where: User_Institution_Bool_Exp;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "parking_lot" */
export type Parking_Lot = {
  __typename?: 'parking_lot';
  /** An array relationship */
  favorites: Array<Favorites>;
  /** An aggregated array relationship */
  favorites_aggregate: Favorites_Aggregate;
  id: Scalars['Int'];
  /** An object relationship */
  institution: Institution;
  institution_id: Scalars['Int'];
  is_disabled: Scalars['Boolean'];
  /** An object relationship */
  location: Location;
  location_id: Scalars['Int'];
  lot_image?: Maybe<Scalars['String']>;
  /** An array relationship */
  lot_rows: Array<Lot_Row>;
  /** An aggregated array relationship */
  lot_rows_aggregate: Lot_Row_Aggregate;
  name: Scalars['String'];
  /** An object relationship */
  vacant_space?: Maybe<Vacant_Space>;
};


/** columns and relationships of "parking_lot" */
export type Parking_LotFavoritesArgs = {
  distinct_on?: Maybe<Array<Favorites_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Favorites_Order_By>>;
  where?: Maybe<Favorites_Bool_Exp>;
};


/** columns and relationships of "parking_lot" */
export type Parking_LotFavorites_AggregateArgs = {
  distinct_on?: Maybe<Array<Favorites_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Favorites_Order_By>>;
  where?: Maybe<Favorites_Bool_Exp>;
};


/** columns and relationships of "parking_lot" */
export type Parking_LotLot_RowsArgs = {
  distinct_on?: Maybe<Array<Lot_Row_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lot_Row_Order_By>>;
  where?: Maybe<Lot_Row_Bool_Exp>;
};


/** columns and relationships of "parking_lot" */
export type Parking_LotLot_Rows_AggregateArgs = {
  distinct_on?: Maybe<Array<Lot_Row_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lot_Row_Order_By>>;
  where?: Maybe<Lot_Row_Bool_Exp>;
};

/** aggregated selection of "parking_lot" */
export type Parking_Lot_Aggregate = {
  __typename?: 'parking_lot_aggregate';
  aggregate?: Maybe<Parking_Lot_Aggregate_Fields>;
  nodes: Array<Parking_Lot>;
};

/** aggregate fields of "parking_lot" */
export type Parking_Lot_Aggregate_Fields = {
  __typename?: 'parking_lot_aggregate_fields';
  avg?: Maybe<Parking_Lot_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Parking_Lot_Max_Fields>;
  min?: Maybe<Parking_Lot_Min_Fields>;
  stddev?: Maybe<Parking_Lot_Stddev_Fields>;
  stddev_pop?: Maybe<Parking_Lot_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Parking_Lot_Stddev_Samp_Fields>;
  sum?: Maybe<Parking_Lot_Sum_Fields>;
  var_pop?: Maybe<Parking_Lot_Var_Pop_Fields>;
  var_samp?: Maybe<Parking_Lot_Var_Samp_Fields>;
  variance?: Maybe<Parking_Lot_Variance_Fields>;
};


/** aggregate fields of "parking_lot" */
export type Parking_Lot_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Parking_Lot_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "parking_lot" */
export type Parking_Lot_Aggregate_Order_By = {
  avg?: Maybe<Parking_Lot_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Parking_Lot_Max_Order_By>;
  min?: Maybe<Parking_Lot_Min_Order_By>;
  stddev?: Maybe<Parking_Lot_Stddev_Order_By>;
  stddev_pop?: Maybe<Parking_Lot_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Parking_Lot_Stddev_Samp_Order_By>;
  sum?: Maybe<Parking_Lot_Sum_Order_By>;
  var_pop?: Maybe<Parking_Lot_Var_Pop_Order_By>;
  var_samp?: Maybe<Parking_Lot_Var_Samp_Order_By>;
  variance?: Maybe<Parking_Lot_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "parking_lot" */
export type Parking_Lot_Arr_Rel_Insert_Input = {
  data: Array<Parking_Lot_Insert_Input>;
  on_conflict?: Maybe<Parking_Lot_On_Conflict>;
};

/** aggregate avg on columns */
export type Parking_Lot_Avg_Fields = {
  __typename?: 'parking_lot_avg_fields';
  id?: Maybe<Scalars['Float']>;
  institution_id?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "parking_lot" */
export type Parking_Lot_Avg_Order_By = {
  id?: Maybe<Order_By>;
  institution_id?: Maybe<Order_By>;
  location_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "parking_lot". All fields are combined with a logical 'AND'. */
export type Parking_Lot_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Parking_Lot_Bool_Exp>>>;
  _not?: Maybe<Parking_Lot_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Parking_Lot_Bool_Exp>>>;
  favorites?: Maybe<Favorites_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  institution?: Maybe<Institution_Bool_Exp>;
  institution_id?: Maybe<Int_Comparison_Exp>;
  is_disabled?: Maybe<Boolean_Comparison_Exp>;
  location?: Maybe<Location_Bool_Exp>;
  location_id?: Maybe<Int_Comparison_Exp>;
  lot_image?: Maybe<String_Comparison_Exp>;
  lot_rows?: Maybe<Lot_Row_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  vacant_space?: Maybe<Vacant_Space_Bool_Exp>;
};

/** unique or primary key constraints on table "parking_lot" */
export enum Parking_Lot_Constraint {
  /** unique or primary key constraint */
  ParkingLotPkey = 'parking_lot_pkey'
}

/** input type for incrementing integer column in table "parking_lot" */
export type Parking_Lot_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  institution_id?: Maybe<Scalars['Int']>;
  location_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "parking_lot" */
export type Parking_Lot_Insert_Input = {
  favorites?: Maybe<Favorites_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  institution?: Maybe<Institution_Obj_Rel_Insert_Input>;
  institution_id?: Maybe<Scalars['Int']>;
  is_disabled?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Location_Obj_Rel_Insert_Input>;
  location_id?: Maybe<Scalars['Int']>;
  lot_image?: Maybe<Scalars['String']>;
  lot_rows?: Maybe<Lot_Row_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Parking_Lot_Max_Fields = {
  __typename?: 'parking_lot_max_fields';
  id?: Maybe<Scalars['Int']>;
  institution_id?: Maybe<Scalars['Int']>;
  location_id?: Maybe<Scalars['Int']>;
  lot_image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "parking_lot" */
export type Parking_Lot_Max_Order_By = {
  id?: Maybe<Order_By>;
  institution_id?: Maybe<Order_By>;
  location_id?: Maybe<Order_By>;
  lot_image?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Parking_Lot_Min_Fields = {
  __typename?: 'parking_lot_min_fields';
  id?: Maybe<Scalars['Int']>;
  institution_id?: Maybe<Scalars['Int']>;
  location_id?: Maybe<Scalars['Int']>;
  lot_image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "parking_lot" */
export type Parking_Lot_Min_Order_By = {
  id?: Maybe<Order_By>;
  institution_id?: Maybe<Order_By>;
  location_id?: Maybe<Order_By>;
  lot_image?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "parking_lot" */
export type Parking_Lot_Mutation_Response = {
  __typename?: 'parking_lot_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Parking_Lot>;
};

/** input type for inserting object relation for remote table "parking_lot" */
export type Parking_Lot_Obj_Rel_Insert_Input = {
  data: Parking_Lot_Insert_Input;
  on_conflict?: Maybe<Parking_Lot_On_Conflict>;
};

/** on conflict condition type for table "parking_lot" */
export type Parking_Lot_On_Conflict = {
  constraint: Parking_Lot_Constraint;
  update_columns: Array<Parking_Lot_Update_Column>;
  where?: Maybe<Parking_Lot_Bool_Exp>;
};

/** ordering options when selecting data from "parking_lot" */
export type Parking_Lot_Order_By = {
  favorites_aggregate?: Maybe<Favorites_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  institution?: Maybe<Institution_Order_By>;
  institution_id?: Maybe<Order_By>;
  is_disabled?: Maybe<Order_By>;
  location?: Maybe<Location_Order_By>;
  location_id?: Maybe<Order_By>;
  lot_image?: Maybe<Order_By>;
  lot_rows_aggregate?: Maybe<Lot_Row_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  vacant_space?: Maybe<Vacant_Space_Order_By>;
};

/** primary key columns input for table: "parking_lot" */
export type Parking_Lot_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "parking_lot" */
export enum Parking_Lot_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  InstitutionId = 'institution_id',
  /** column name */
  IsDisabled = 'is_disabled',
  /** column name */
  LocationId = 'location_id',
  /** column name */
  LotImage = 'lot_image',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "parking_lot" */
export type Parking_Lot_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  institution_id?: Maybe<Scalars['Int']>;
  is_disabled?: Maybe<Scalars['Boolean']>;
  location_id?: Maybe<Scalars['Int']>;
  lot_image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Parking_Lot_Stddev_Fields = {
  __typename?: 'parking_lot_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  institution_id?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "parking_lot" */
export type Parking_Lot_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  institution_id?: Maybe<Order_By>;
  location_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Parking_Lot_Stddev_Pop_Fields = {
  __typename?: 'parking_lot_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  institution_id?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "parking_lot" */
export type Parking_Lot_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  institution_id?: Maybe<Order_By>;
  location_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Parking_Lot_Stddev_Samp_Fields = {
  __typename?: 'parking_lot_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  institution_id?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "parking_lot" */
export type Parking_Lot_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  institution_id?: Maybe<Order_By>;
  location_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Parking_Lot_Sum_Fields = {
  __typename?: 'parking_lot_sum_fields';
  id?: Maybe<Scalars['Int']>;
  institution_id?: Maybe<Scalars['Int']>;
  location_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "parking_lot" */
export type Parking_Lot_Sum_Order_By = {
  id?: Maybe<Order_By>;
  institution_id?: Maybe<Order_By>;
  location_id?: Maybe<Order_By>;
};

/** update columns of table "parking_lot" */
export enum Parking_Lot_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  InstitutionId = 'institution_id',
  /** column name */
  IsDisabled = 'is_disabled',
  /** column name */
  LocationId = 'location_id',
  /** column name */
  LotImage = 'lot_image',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Parking_Lot_Var_Pop_Fields = {
  __typename?: 'parking_lot_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  institution_id?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "parking_lot" */
export type Parking_Lot_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  institution_id?: Maybe<Order_By>;
  location_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Parking_Lot_Var_Samp_Fields = {
  __typename?: 'parking_lot_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  institution_id?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "parking_lot" */
export type Parking_Lot_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  institution_id?: Maybe<Order_By>;
  location_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Parking_Lot_Variance_Fields = {
  __typename?: 'parking_lot_variance_fields';
  id?: Maybe<Scalars['Float']>;
  institution_id?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "parking_lot" */
export type Parking_Lot_Variance_Order_By = {
  id?: Maybe<Order_By>;
  institution_id?: Maybe<Order_By>;
  location_id?: Maybe<Order_By>;
};

/** columns and relationships of "parking_space" */
export type Parking_Space = {
  __typename?: 'parking_space';
  id: Scalars['Int'];
  is_blank: Scalars['Boolean'];
  is_disabled: Scalars['Boolean'];
  is_driver_disabled_parking: Scalars['Boolean'];
  is_entry: Scalars['Boolean'];
  is_exit: Scalars['Boolean'];
  is_occupied: Scalars['Boolean'];
  is_road: Scalars['Boolean'];
  is_space: Scalars['Boolean'];
  /** An object relationship */
  lot_row: Lot_Row;
  lot_row_id: Scalars['Int'];
  rotation: Scalars['Int'];
  space_id?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "parking_space" */
export type Parking_Space_Aggregate = {
  __typename?: 'parking_space_aggregate';
  aggregate?: Maybe<Parking_Space_Aggregate_Fields>;
  nodes: Array<Parking_Space>;
};

/** aggregate fields of "parking_space" */
export type Parking_Space_Aggregate_Fields = {
  __typename?: 'parking_space_aggregate_fields';
  avg?: Maybe<Parking_Space_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Parking_Space_Max_Fields>;
  min?: Maybe<Parking_Space_Min_Fields>;
  stddev?: Maybe<Parking_Space_Stddev_Fields>;
  stddev_pop?: Maybe<Parking_Space_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Parking_Space_Stddev_Samp_Fields>;
  sum?: Maybe<Parking_Space_Sum_Fields>;
  var_pop?: Maybe<Parking_Space_Var_Pop_Fields>;
  var_samp?: Maybe<Parking_Space_Var_Samp_Fields>;
  variance?: Maybe<Parking_Space_Variance_Fields>;
};


/** aggregate fields of "parking_space" */
export type Parking_Space_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Parking_Space_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "parking_space" */
export type Parking_Space_Aggregate_Order_By = {
  avg?: Maybe<Parking_Space_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Parking_Space_Max_Order_By>;
  min?: Maybe<Parking_Space_Min_Order_By>;
  stddev?: Maybe<Parking_Space_Stddev_Order_By>;
  stddev_pop?: Maybe<Parking_Space_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Parking_Space_Stddev_Samp_Order_By>;
  sum?: Maybe<Parking_Space_Sum_Order_By>;
  var_pop?: Maybe<Parking_Space_Var_Pop_Order_By>;
  var_samp?: Maybe<Parking_Space_Var_Samp_Order_By>;
  variance?: Maybe<Parking_Space_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "parking_space" */
export type Parking_Space_Arr_Rel_Insert_Input = {
  data: Array<Parking_Space_Insert_Input>;
  on_conflict?: Maybe<Parking_Space_On_Conflict>;
};

/** aggregate avg on columns */
export type Parking_Space_Avg_Fields = {
  __typename?: 'parking_space_avg_fields';
  id?: Maybe<Scalars['Float']>;
  lot_row_id?: Maybe<Scalars['Float']>;
  rotation?: Maybe<Scalars['Float']>;
  space_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "parking_space" */
export type Parking_Space_Avg_Order_By = {
  id?: Maybe<Order_By>;
  lot_row_id?: Maybe<Order_By>;
  rotation?: Maybe<Order_By>;
  space_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "parking_space". All fields are combined with a logical 'AND'. */
export type Parking_Space_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Parking_Space_Bool_Exp>>>;
  _not?: Maybe<Parking_Space_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Parking_Space_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  is_blank?: Maybe<Boolean_Comparison_Exp>;
  is_disabled?: Maybe<Boolean_Comparison_Exp>;
  is_driver_disabled_parking?: Maybe<Boolean_Comparison_Exp>;
  is_entry?: Maybe<Boolean_Comparison_Exp>;
  is_exit?: Maybe<Boolean_Comparison_Exp>;
  is_occupied?: Maybe<Boolean_Comparison_Exp>;
  is_road?: Maybe<Boolean_Comparison_Exp>;
  is_space?: Maybe<Boolean_Comparison_Exp>;
  lot_row?: Maybe<Lot_Row_Bool_Exp>;
  lot_row_id?: Maybe<Int_Comparison_Exp>;
  rotation?: Maybe<Int_Comparison_Exp>;
  space_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "parking_space" */
export enum Parking_Space_Constraint {
  /** unique or primary key constraint */
  ParkingSpacePkey = 'parking_space_pkey'
}

/** input type for incrementing integer column in table "parking_space" */
export type Parking_Space_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  lot_row_id?: Maybe<Scalars['Int']>;
  rotation?: Maybe<Scalars['Int']>;
  space_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "parking_space" */
export type Parking_Space_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  is_blank?: Maybe<Scalars['Boolean']>;
  is_disabled?: Maybe<Scalars['Boolean']>;
  is_driver_disabled_parking?: Maybe<Scalars['Boolean']>;
  is_entry?: Maybe<Scalars['Boolean']>;
  is_exit?: Maybe<Scalars['Boolean']>;
  is_occupied?: Maybe<Scalars['Boolean']>;
  is_road?: Maybe<Scalars['Boolean']>;
  is_space?: Maybe<Scalars['Boolean']>;
  lot_row?: Maybe<Lot_Row_Obj_Rel_Insert_Input>;
  lot_row_id?: Maybe<Scalars['Int']>;
  rotation?: Maybe<Scalars['Int']>;
  space_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Parking_Space_Max_Fields = {
  __typename?: 'parking_space_max_fields';
  id?: Maybe<Scalars['Int']>;
  lot_row_id?: Maybe<Scalars['Int']>;
  rotation?: Maybe<Scalars['Int']>;
  space_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "parking_space" */
export type Parking_Space_Max_Order_By = {
  id?: Maybe<Order_By>;
  lot_row_id?: Maybe<Order_By>;
  rotation?: Maybe<Order_By>;
  space_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Parking_Space_Min_Fields = {
  __typename?: 'parking_space_min_fields';
  id?: Maybe<Scalars['Int']>;
  lot_row_id?: Maybe<Scalars['Int']>;
  rotation?: Maybe<Scalars['Int']>;
  space_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "parking_space" */
export type Parking_Space_Min_Order_By = {
  id?: Maybe<Order_By>;
  lot_row_id?: Maybe<Order_By>;
  rotation?: Maybe<Order_By>;
  space_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "parking_space" */
export type Parking_Space_Mutation_Response = {
  __typename?: 'parking_space_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Parking_Space>;
};

/** input type for inserting object relation for remote table "parking_space" */
export type Parking_Space_Obj_Rel_Insert_Input = {
  data: Parking_Space_Insert_Input;
  on_conflict?: Maybe<Parking_Space_On_Conflict>;
};

/** on conflict condition type for table "parking_space" */
export type Parking_Space_On_Conflict = {
  constraint: Parking_Space_Constraint;
  update_columns: Array<Parking_Space_Update_Column>;
  where?: Maybe<Parking_Space_Bool_Exp>;
};

/** ordering options when selecting data from "parking_space" */
export type Parking_Space_Order_By = {
  id?: Maybe<Order_By>;
  is_blank?: Maybe<Order_By>;
  is_disabled?: Maybe<Order_By>;
  is_driver_disabled_parking?: Maybe<Order_By>;
  is_entry?: Maybe<Order_By>;
  is_exit?: Maybe<Order_By>;
  is_occupied?: Maybe<Order_By>;
  is_road?: Maybe<Order_By>;
  is_space?: Maybe<Order_By>;
  lot_row?: Maybe<Lot_Row_Order_By>;
  lot_row_id?: Maybe<Order_By>;
  rotation?: Maybe<Order_By>;
  space_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "parking_space" */
export type Parking_Space_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "parking_space" */
export enum Parking_Space_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  IsBlank = 'is_blank',
  /** column name */
  IsDisabled = 'is_disabled',
  /** column name */
  IsDriverDisabledParking = 'is_driver_disabled_parking',
  /** column name */
  IsEntry = 'is_entry',
  /** column name */
  IsExit = 'is_exit',
  /** column name */
  IsOccupied = 'is_occupied',
  /** column name */
  IsRoad = 'is_road',
  /** column name */
  IsSpace = 'is_space',
  /** column name */
  LotRowId = 'lot_row_id',
  /** column name */
  Rotation = 'rotation',
  /** column name */
  SpaceId = 'space_id'
}

/** input type for updating data in table "parking_space" */
export type Parking_Space_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  is_blank?: Maybe<Scalars['Boolean']>;
  is_disabled?: Maybe<Scalars['Boolean']>;
  is_driver_disabled_parking?: Maybe<Scalars['Boolean']>;
  is_entry?: Maybe<Scalars['Boolean']>;
  is_exit?: Maybe<Scalars['Boolean']>;
  is_occupied?: Maybe<Scalars['Boolean']>;
  is_road?: Maybe<Scalars['Boolean']>;
  is_space?: Maybe<Scalars['Boolean']>;
  lot_row_id?: Maybe<Scalars['Int']>;
  rotation?: Maybe<Scalars['Int']>;
  space_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Parking_Space_Stddev_Fields = {
  __typename?: 'parking_space_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  lot_row_id?: Maybe<Scalars['Float']>;
  rotation?: Maybe<Scalars['Float']>;
  space_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "parking_space" */
export type Parking_Space_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  lot_row_id?: Maybe<Order_By>;
  rotation?: Maybe<Order_By>;
  space_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Parking_Space_Stddev_Pop_Fields = {
  __typename?: 'parking_space_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  lot_row_id?: Maybe<Scalars['Float']>;
  rotation?: Maybe<Scalars['Float']>;
  space_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "parking_space" */
export type Parking_Space_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  lot_row_id?: Maybe<Order_By>;
  rotation?: Maybe<Order_By>;
  space_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Parking_Space_Stddev_Samp_Fields = {
  __typename?: 'parking_space_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  lot_row_id?: Maybe<Scalars['Float']>;
  rotation?: Maybe<Scalars['Float']>;
  space_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "parking_space" */
export type Parking_Space_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  lot_row_id?: Maybe<Order_By>;
  rotation?: Maybe<Order_By>;
  space_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Parking_Space_Sum_Fields = {
  __typename?: 'parking_space_sum_fields';
  id?: Maybe<Scalars['Int']>;
  lot_row_id?: Maybe<Scalars['Int']>;
  rotation?: Maybe<Scalars['Int']>;
  space_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "parking_space" */
export type Parking_Space_Sum_Order_By = {
  id?: Maybe<Order_By>;
  lot_row_id?: Maybe<Order_By>;
  rotation?: Maybe<Order_By>;
  space_id?: Maybe<Order_By>;
};

/** update columns of table "parking_space" */
export enum Parking_Space_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  IsBlank = 'is_blank',
  /** column name */
  IsDisabled = 'is_disabled',
  /** column name */
  IsDriverDisabledParking = 'is_driver_disabled_parking',
  /** column name */
  IsEntry = 'is_entry',
  /** column name */
  IsExit = 'is_exit',
  /** column name */
  IsOccupied = 'is_occupied',
  /** column name */
  IsRoad = 'is_road',
  /** column name */
  IsSpace = 'is_space',
  /** column name */
  LotRowId = 'lot_row_id',
  /** column name */
  Rotation = 'rotation',
  /** column name */
  SpaceId = 'space_id'
}

/** aggregate var_pop on columns */
export type Parking_Space_Var_Pop_Fields = {
  __typename?: 'parking_space_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  lot_row_id?: Maybe<Scalars['Float']>;
  rotation?: Maybe<Scalars['Float']>;
  space_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "parking_space" */
export type Parking_Space_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  lot_row_id?: Maybe<Order_By>;
  rotation?: Maybe<Order_By>;
  space_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Parking_Space_Var_Samp_Fields = {
  __typename?: 'parking_space_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  lot_row_id?: Maybe<Scalars['Float']>;
  rotation?: Maybe<Scalars['Float']>;
  space_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "parking_space" */
export type Parking_Space_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  lot_row_id?: Maybe<Order_By>;
  rotation?: Maybe<Order_By>;
  space_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Parking_Space_Variance_Fields = {
  __typename?: 'parking_space_variance_fields';
  id?: Maybe<Scalars['Float']>;
  lot_row_id?: Maybe<Scalars['Float']>;
  rotation?: Maybe<Scalars['Float']>;
  space_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "parking_space" */
export type Parking_Space_Variance_Order_By = {
  id?: Maybe<Order_By>;
  lot_row_id?: Maybe<Order_By>;
  rotation?: Maybe<Order_By>;
  space_id?: Maybe<Order_By>;
};

/** columns and relationships of "past_lot_occupancy" */
export type Past_Lot_Occupancy = {
  __typename?: 'past_lot_occupancy';
  id: Scalars['Int'];
  occupied: Scalars['Int'];
  /** An object relationship */
  parking_lot: Parking_Lot;
  parking_lot_id: Scalars['Int'];
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "past_lot_occupancy" */
export type Past_Lot_Occupancy_Aggregate = {
  __typename?: 'past_lot_occupancy_aggregate';
  aggregate?: Maybe<Past_Lot_Occupancy_Aggregate_Fields>;
  nodes: Array<Past_Lot_Occupancy>;
};

/** aggregate fields of "past_lot_occupancy" */
export type Past_Lot_Occupancy_Aggregate_Fields = {
  __typename?: 'past_lot_occupancy_aggregate_fields';
  avg?: Maybe<Past_Lot_Occupancy_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Past_Lot_Occupancy_Max_Fields>;
  min?: Maybe<Past_Lot_Occupancy_Min_Fields>;
  stddev?: Maybe<Past_Lot_Occupancy_Stddev_Fields>;
  stddev_pop?: Maybe<Past_Lot_Occupancy_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Past_Lot_Occupancy_Stddev_Samp_Fields>;
  sum?: Maybe<Past_Lot_Occupancy_Sum_Fields>;
  var_pop?: Maybe<Past_Lot_Occupancy_Var_Pop_Fields>;
  var_samp?: Maybe<Past_Lot_Occupancy_Var_Samp_Fields>;
  variance?: Maybe<Past_Lot_Occupancy_Variance_Fields>;
};


/** aggregate fields of "past_lot_occupancy" */
export type Past_Lot_Occupancy_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Past_Lot_Occupancy_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "past_lot_occupancy" */
export type Past_Lot_Occupancy_Aggregate_Order_By = {
  avg?: Maybe<Past_Lot_Occupancy_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Past_Lot_Occupancy_Max_Order_By>;
  min?: Maybe<Past_Lot_Occupancy_Min_Order_By>;
  stddev?: Maybe<Past_Lot_Occupancy_Stddev_Order_By>;
  stddev_pop?: Maybe<Past_Lot_Occupancy_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Past_Lot_Occupancy_Stddev_Samp_Order_By>;
  sum?: Maybe<Past_Lot_Occupancy_Sum_Order_By>;
  var_pop?: Maybe<Past_Lot_Occupancy_Var_Pop_Order_By>;
  var_samp?: Maybe<Past_Lot_Occupancy_Var_Samp_Order_By>;
  variance?: Maybe<Past_Lot_Occupancy_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "past_lot_occupancy" */
export type Past_Lot_Occupancy_Arr_Rel_Insert_Input = {
  data: Array<Past_Lot_Occupancy_Insert_Input>;
  on_conflict?: Maybe<Past_Lot_Occupancy_On_Conflict>;
};

/** aggregate avg on columns */
export type Past_Lot_Occupancy_Avg_Fields = {
  __typename?: 'past_lot_occupancy_avg_fields';
  id?: Maybe<Scalars['Float']>;
  occupied?: Maybe<Scalars['Float']>;
  parking_lot_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "past_lot_occupancy" */
export type Past_Lot_Occupancy_Avg_Order_By = {
  id?: Maybe<Order_By>;
  occupied?: Maybe<Order_By>;
  parking_lot_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "past_lot_occupancy". All fields are combined with a logical 'AND'. */
export type Past_Lot_Occupancy_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Past_Lot_Occupancy_Bool_Exp>>>;
  _not?: Maybe<Past_Lot_Occupancy_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Past_Lot_Occupancy_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  occupied?: Maybe<Int_Comparison_Exp>;
  parking_lot?: Maybe<Parking_Lot_Bool_Exp>;
  parking_lot_id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "past_lot_occupancy" */
export enum Past_Lot_Occupancy_Constraint {
  /** unique or primary key constraint */
  PastLotOccupancyPkey = 'past_lot_occupancy_pkey'
}

/** input type for incrementing integer column in table "past_lot_occupancy" */
export type Past_Lot_Occupancy_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  occupied?: Maybe<Scalars['Int']>;
  parking_lot_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "past_lot_occupancy" */
export type Past_Lot_Occupancy_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  occupied?: Maybe<Scalars['Int']>;
  parking_lot?: Maybe<Parking_Lot_Obj_Rel_Insert_Input>;
  parking_lot_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Past_Lot_Occupancy_Max_Fields = {
  __typename?: 'past_lot_occupancy_max_fields';
  id?: Maybe<Scalars['Int']>;
  occupied?: Maybe<Scalars['Int']>;
  parking_lot_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "past_lot_occupancy" */
export type Past_Lot_Occupancy_Max_Order_By = {
  id?: Maybe<Order_By>;
  occupied?: Maybe<Order_By>;
  parking_lot_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Past_Lot_Occupancy_Min_Fields = {
  __typename?: 'past_lot_occupancy_min_fields';
  id?: Maybe<Scalars['Int']>;
  occupied?: Maybe<Scalars['Int']>;
  parking_lot_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "past_lot_occupancy" */
export type Past_Lot_Occupancy_Min_Order_By = {
  id?: Maybe<Order_By>;
  occupied?: Maybe<Order_By>;
  parking_lot_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "past_lot_occupancy" */
export type Past_Lot_Occupancy_Mutation_Response = {
  __typename?: 'past_lot_occupancy_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Past_Lot_Occupancy>;
};

/** input type for inserting object relation for remote table "past_lot_occupancy" */
export type Past_Lot_Occupancy_Obj_Rel_Insert_Input = {
  data: Past_Lot_Occupancy_Insert_Input;
  on_conflict?: Maybe<Past_Lot_Occupancy_On_Conflict>;
};

/** on conflict condition type for table "past_lot_occupancy" */
export type Past_Lot_Occupancy_On_Conflict = {
  constraint: Past_Lot_Occupancy_Constraint;
  update_columns: Array<Past_Lot_Occupancy_Update_Column>;
  where?: Maybe<Past_Lot_Occupancy_Bool_Exp>;
};

/** ordering options when selecting data from "past_lot_occupancy" */
export type Past_Lot_Occupancy_Order_By = {
  id?: Maybe<Order_By>;
  occupied?: Maybe<Order_By>;
  parking_lot?: Maybe<Parking_Lot_Order_By>;
  parking_lot_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "past_lot_occupancy" */
export type Past_Lot_Occupancy_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "past_lot_occupancy" */
export enum Past_Lot_Occupancy_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Occupied = 'occupied',
  /** column name */
  ParkingLotId = 'parking_lot_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "past_lot_occupancy" */
export type Past_Lot_Occupancy_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  occupied?: Maybe<Scalars['Int']>;
  parking_lot_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Past_Lot_Occupancy_Stddev_Fields = {
  __typename?: 'past_lot_occupancy_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  occupied?: Maybe<Scalars['Float']>;
  parking_lot_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "past_lot_occupancy" */
export type Past_Lot_Occupancy_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  occupied?: Maybe<Order_By>;
  parking_lot_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Past_Lot_Occupancy_Stddev_Pop_Fields = {
  __typename?: 'past_lot_occupancy_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  occupied?: Maybe<Scalars['Float']>;
  parking_lot_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "past_lot_occupancy" */
export type Past_Lot_Occupancy_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  occupied?: Maybe<Order_By>;
  parking_lot_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Past_Lot_Occupancy_Stddev_Samp_Fields = {
  __typename?: 'past_lot_occupancy_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  occupied?: Maybe<Scalars['Float']>;
  parking_lot_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "past_lot_occupancy" */
export type Past_Lot_Occupancy_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  occupied?: Maybe<Order_By>;
  parking_lot_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Past_Lot_Occupancy_Sum_Fields = {
  __typename?: 'past_lot_occupancy_sum_fields';
  id?: Maybe<Scalars['Int']>;
  occupied?: Maybe<Scalars['Int']>;
  parking_lot_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "past_lot_occupancy" */
export type Past_Lot_Occupancy_Sum_Order_By = {
  id?: Maybe<Order_By>;
  occupied?: Maybe<Order_By>;
  parking_lot_id?: Maybe<Order_By>;
};

/** update columns of table "past_lot_occupancy" */
export enum Past_Lot_Occupancy_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Occupied = 'occupied',
  /** column name */
  ParkingLotId = 'parking_lot_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Past_Lot_Occupancy_Var_Pop_Fields = {
  __typename?: 'past_lot_occupancy_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  occupied?: Maybe<Scalars['Float']>;
  parking_lot_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "past_lot_occupancy" */
export type Past_Lot_Occupancy_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  occupied?: Maybe<Order_By>;
  parking_lot_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Past_Lot_Occupancy_Var_Samp_Fields = {
  __typename?: 'past_lot_occupancy_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  occupied?: Maybe<Scalars['Float']>;
  parking_lot_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "past_lot_occupancy" */
export type Past_Lot_Occupancy_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  occupied?: Maybe<Order_By>;
  parking_lot_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Past_Lot_Occupancy_Variance_Fields = {
  __typename?: 'past_lot_occupancy_variance_fields';
  id?: Maybe<Scalars['Float']>;
  occupied?: Maybe<Scalars['Float']>;
  parking_lot_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "past_lot_occupancy" */
export type Past_Lot_Occupancy_Variance_Order_By = {
  id?: Maybe<Order_By>;
  occupied?: Maybe<Order_By>;
  parking_lot_id?: Maybe<Order_By>;
};

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "favorites" */
  favorites: Array<Favorites>;
  /** fetch aggregated fields from the table: "favorites" */
  favorites_aggregate: Favorites_Aggregate;
  /** fetch data from the table: "institution" */
  institution: Array<Institution>;
  /** fetch aggregated fields from the table: "institution" */
  institution_aggregate: Institution_Aggregate;
  /** fetch data from the table: "institution" using primary key columns */
  institution_by_pk?: Maybe<Institution>;
  /** fetch data from the table: "knex_migrations" */
  knex_migrations: Array<Knex_Migrations>;
  /** fetch aggregated fields from the table: "knex_migrations" */
  knex_migrations_aggregate: Knex_Migrations_Aggregate;
  /** fetch data from the table: "knex_migrations" using primary key columns */
  knex_migrations_by_pk?: Maybe<Knex_Migrations>;
  /** fetch data from the table: "knex_migrations_lock" */
  knex_migrations_lock: Array<Knex_Migrations_Lock>;
  /** fetch aggregated fields from the table: "knex_migrations_lock" */
  knex_migrations_lock_aggregate: Knex_Migrations_Lock_Aggregate;
  /** fetch data from the table: "knex_migrations_lock" using primary key columns */
  knex_migrations_lock_by_pk?: Maybe<Knex_Migrations_Lock>;
  /** fetch data from the table: "location" */
  location: Array<Location>;
  /** fetch aggregated fields from the table: "location" */
  location_aggregate: Location_Aggregate;
  /** fetch data from the table: "location" using primary key columns */
  location_by_pk?: Maybe<Location>;
  /** fetch data from the table: "lot_row" */
  lot_row: Array<Lot_Row>;
  /** fetch aggregated fields from the table: "lot_row" */
  lot_row_aggregate: Lot_Row_Aggregate;
  /** fetch data from the table: "lot_row" using primary key columns */
  lot_row_by_pk?: Maybe<Lot_Row>;
  /** perform the action: "nearby_spaces" */
  nearby_spaces?: Maybe<Array<Maybe<NearbySpacesOutput>>>;
  /** fetch data from the table: "parking_lot" */
  parking_lot: Array<Parking_Lot>;
  /** fetch aggregated fields from the table: "parking_lot" */
  parking_lot_aggregate: Parking_Lot_Aggregate;
  /** fetch data from the table: "parking_lot" using primary key columns */
  parking_lot_by_pk?: Maybe<Parking_Lot>;
  /** fetch data from the table: "parking_space" */
  parking_space: Array<Parking_Space>;
  /** fetch aggregated fields from the table: "parking_space" */
  parking_space_aggregate: Parking_Space_Aggregate;
  /** fetch data from the table: "parking_space" using primary key columns */
  parking_space_by_pk?: Maybe<Parking_Space>;
  /** fetch data from the table: "past_lot_occupancy" */
  past_lot_occupancy: Array<Past_Lot_Occupancy>;
  /** fetch aggregated fields from the table: "past_lot_occupancy" */
  past_lot_occupancy_aggregate: Past_Lot_Occupancy_Aggregate;
  /** fetch data from the table: "past_lot_occupancy" using primary key columns */
  past_lot_occupancy_by_pk?: Maybe<Past_Lot_Occupancy>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "user_institution" */
  user_institution: Array<User_Institution>;
  /** fetch aggregated fields from the table: "user_institution" */
  user_institution_aggregate: User_Institution_Aggregate;
  /** fetch data from the table: "vacant_space" */
  vacant_space: Array<Vacant_Space>;
  /** fetch aggregated fields from the table: "vacant_space" */
  vacant_space_aggregate: Vacant_Space_Aggregate;
};


/** query root */
export type Query_RootFavoritesArgs = {
  distinct_on?: Maybe<Array<Favorites_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Favorites_Order_By>>;
  where?: Maybe<Favorites_Bool_Exp>;
};


/** query root */
export type Query_RootFavorites_AggregateArgs = {
  distinct_on?: Maybe<Array<Favorites_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Favorites_Order_By>>;
  where?: Maybe<Favorites_Bool_Exp>;
};


/** query root */
export type Query_RootInstitutionArgs = {
  distinct_on?: Maybe<Array<Institution_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Institution_Order_By>>;
  where?: Maybe<Institution_Bool_Exp>;
};


/** query root */
export type Query_RootInstitution_AggregateArgs = {
  distinct_on?: Maybe<Array<Institution_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Institution_Order_By>>;
  where?: Maybe<Institution_Bool_Exp>;
};


/** query root */
export type Query_RootInstitution_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootKnex_MigrationsArgs = {
  distinct_on?: Maybe<Array<Knex_Migrations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Knex_Migrations_Order_By>>;
  where?: Maybe<Knex_Migrations_Bool_Exp>;
};


/** query root */
export type Query_RootKnex_Migrations_AggregateArgs = {
  distinct_on?: Maybe<Array<Knex_Migrations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Knex_Migrations_Order_By>>;
  where?: Maybe<Knex_Migrations_Bool_Exp>;
};


/** query root */
export type Query_RootKnex_Migrations_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootKnex_Migrations_LockArgs = {
  distinct_on?: Maybe<Array<Knex_Migrations_Lock_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Knex_Migrations_Lock_Order_By>>;
  where?: Maybe<Knex_Migrations_Lock_Bool_Exp>;
};


/** query root */
export type Query_RootKnex_Migrations_Lock_AggregateArgs = {
  distinct_on?: Maybe<Array<Knex_Migrations_Lock_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Knex_Migrations_Lock_Order_By>>;
  where?: Maybe<Knex_Migrations_Lock_Bool_Exp>;
};


/** query root */
export type Query_RootKnex_Migrations_Lock_By_PkArgs = {
  index: Scalars['Int'];
};


/** query root */
export type Query_RootLocationArgs = {
  distinct_on?: Maybe<Array<Location_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Location_Order_By>>;
  where?: Maybe<Location_Bool_Exp>;
};


/** query root */
export type Query_RootLocation_AggregateArgs = {
  distinct_on?: Maybe<Array<Location_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Location_Order_By>>;
  where?: Maybe<Location_Bool_Exp>;
};


/** query root */
export type Query_RootLocation_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootLot_RowArgs = {
  distinct_on?: Maybe<Array<Lot_Row_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lot_Row_Order_By>>;
  where?: Maybe<Lot_Row_Bool_Exp>;
};


/** query root */
export type Query_RootLot_Row_AggregateArgs = {
  distinct_on?: Maybe<Array<Lot_Row_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lot_Row_Order_By>>;
  where?: Maybe<Lot_Row_Bool_Exp>;
};


/** query root */
export type Query_RootLot_Row_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootNearby_SpacesArgs = {
  arg1: NearbySpacesInput;
};


/** query root */
export type Query_RootParking_LotArgs = {
  distinct_on?: Maybe<Array<Parking_Lot_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Parking_Lot_Order_By>>;
  where?: Maybe<Parking_Lot_Bool_Exp>;
};


/** query root */
export type Query_RootParking_Lot_AggregateArgs = {
  distinct_on?: Maybe<Array<Parking_Lot_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Parking_Lot_Order_By>>;
  where?: Maybe<Parking_Lot_Bool_Exp>;
};


/** query root */
export type Query_RootParking_Lot_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootParking_SpaceArgs = {
  distinct_on?: Maybe<Array<Parking_Space_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Parking_Space_Order_By>>;
  where?: Maybe<Parking_Space_Bool_Exp>;
};


/** query root */
export type Query_RootParking_Space_AggregateArgs = {
  distinct_on?: Maybe<Array<Parking_Space_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Parking_Space_Order_By>>;
  where?: Maybe<Parking_Space_Bool_Exp>;
};


/** query root */
export type Query_RootParking_Space_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootPast_Lot_OccupancyArgs = {
  distinct_on?: Maybe<Array<Past_Lot_Occupancy_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Past_Lot_Occupancy_Order_By>>;
  where?: Maybe<Past_Lot_Occupancy_Bool_Exp>;
};


/** query root */
export type Query_RootPast_Lot_Occupancy_AggregateArgs = {
  distinct_on?: Maybe<Array<Past_Lot_Occupancy_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Past_Lot_Occupancy_Order_By>>;
  where?: Maybe<Past_Lot_Occupancy_Bool_Exp>;
};


/** query root */
export type Query_RootPast_Lot_Occupancy_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** query root */
export type Query_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** query root */
export type Query_RootUser_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootUser_InstitutionArgs = {
  distinct_on?: Maybe<Array<User_Institution_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Institution_Order_By>>;
  where?: Maybe<User_Institution_Bool_Exp>;
};


/** query root */
export type Query_RootUser_Institution_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Institution_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Institution_Order_By>>;
  where?: Maybe<User_Institution_Bool_Exp>;
};


/** query root */
export type Query_RootVacant_SpaceArgs = {
  distinct_on?: Maybe<Array<Vacant_Space_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vacant_Space_Order_By>>;
  where?: Maybe<Vacant_Space_Bool_Exp>;
};


/** query root */
export type Query_RootVacant_Space_AggregateArgs = {
  distinct_on?: Maybe<Array<Vacant_Space_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vacant_Space_Order_By>>;
  where?: Maybe<Vacant_Space_Bool_Exp>;
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "favorites" */
  favorites: Array<Favorites>;
  /** fetch aggregated fields from the table: "favorites" */
  favorites_aggregate: Favorites_Aggregate;
  /** fetch data from the table: "institution" */
  institution: Array<Institution>;
  /** fetch aggregated fields from the table: "institution" */
  institution_aggregate: Institution_Aggregate;
  /** fetch data from the table: "institution" using primary key columns */
  institution_by_pk?: Maybe<Institution>;
  /** fetch data from the table: "knex_migrations" */
  knex_migrations: Array<Knex_Migrations>;
  /** fetch aggregated fields from the table: "knex_migrations" */
  knex_migrations_aggregate: Knex_Migrations_Aggregate;
  /** fetch data from the table: "knex_migrations" using primary key columns */
  knex_migrations_by_pk?: Maybe<Knex_Migrations>;
  /** fetch data from the table: "knex_migrations_lock" */
  knex_migrations_lock: Array<Knex_Migrations_Lock>;
  /** fetch aggregated fields from the table: "knex_migrations_lock" */
  knex_migrations_lock_aggregate: Knex_Migrations_Lock_Aggregate;
  /** fetch data from the table: "knex_migrations_lock" using primary key columns */
  knex_migrations_lock_by_pk?: Maybe<Knex_Migrations_Lock>;
  /** fetch data from the table: "location" */
  location: Array<Location>;
  /** fetch aggregated fields from the table: "location" */
  location_aggregate: Location_Aggregate;
  /** fetch data from the table: "location" using primary key columns */
  location_by_pk?: Maybe<Location>;
  /** fetch data from the table: "lot_row" */
  lot_row: Array<Lot_Row>;
  /** fetch aggregated fields from the table: "lot_row" */
  lot_row_aggregate: Lot_Row_Aggregate;
  /** fetch data from the table: "lot_row" using primary key columns */
  lot_row_by_pk?: Maybe<Lot_Row>;
  /** perform the action: "nearby_spaces" */
  nearby_spaces?: Maybe<Array<Maybe<NearbySpacesOutput>>>;
  /** fetch data from the table: "parking_lot" */
  parking_lot: Array<Parking_Lot>;
  /** fetch aggregated fields from the table: "parking_lot" */
  parking_lot_aggregate: Parking_Lot_Aggregate;
  /** fetch data from the table: "parking_lot" using primary key columns */
  parking_lot_by_pk?: Maybe<Parking_Lot>;
  /** fetch data from the table: "parking_space" */
  parking_space: Array<Parking_Space>;
  /** fetch aggregated fields from the table: "parking_space" */
  parking_space_aggregate: Parking_Space_Aggregate;
  /** fetch data from the table: "parking_space" using primary key columns */
  parking_space_by_pk?: Maybe<Parking_Space>;
  /** fetch data from the table: "past_lot_occupancy" */
  past_lot_occupancy: Array<Past_Lot_Occupancy>;
  /** fetch aggregated fields from the table: "past_lot_occupancy" */
  past_lot_occupancy_aggregate: Past_Lot_Occupancy_Aggregate;
  /** fetch data from the table: "past_lot_occupancy" using primary key columns */
  past_lot_occupancy_by_pk?: Maybe<Past_Lot_Occupancy>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "user_institution" */
  user_institution: Array<User_Institution>;
  /** fetch aggregated fields from the table: "user_institution" */
  user_institution_aggregate: User_Institution_Aggregate;
  /** fetch data from the table: "vacant_space" */
  vacant_space: Array<Vacant_Space>;
  /** fetch aggregated fields from the table: "vacant_space" */
  vacant_space_aggregate: Vacant_Space_Aggregate;
};


/** subscription root */
export type Subscription_RootFavoritesArgs = {
  distinct_on?: Maybe<Array<Favorites_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Favorites_Order_By>>;
  where?: Maybe<Favorites_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFavorites_AggregateArgs = {
  distinct_on?: Maybe<Array<Favorites_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Favorites_Order_By>>;
  where?: Maybe<Favorites_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootInstitutionArgs = {
  distinct_on?: Maybe<Array<Institution_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Institution_Order_By>>;
  where?: Maybe<Institution_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootInstitution_AggregateArgs = {
  distinct_on?: Maybe<Array<Institution_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Institution_Order_By>>;
  where?: Maybe<Institution_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootInstitution_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootKnex_MigrationsArgs = {
  distinct_on?: Maybe<Array<Knex_Migrations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Knex_Migrations_Order_By>>;
  where?: Maybe<Knex_Migrations_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootKnex_Migrations_AggregateArgs = {
  distinct_on?: Maybe<Array<Knex_Migrations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Knex_Migrations_Order_By>>;
  where?: Maybe<Knex_Migrations_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootKnex_Migrations_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootKnex_Migrations_LockArgs = {
  distinct_on?: Maybe<Array<Knex_Migrations_Lock_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Knex_Migrations_Lock_Order_By>>;
  where?: Maybe<Knex_Migrations_Lock_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootKnex_Migrations_Lock_AggregateArgs = {
  distinct_on?: Maybe<Array<Knex_Migrations_Lock_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Knex_Migrations_Lock_Order_By>>;
  where?: Maybe<Knex_Migrations_Lock_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootKnex_Migrations_Lock_By_PkArgs = {
  index: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootLocationArgs = {
  distinct_on?: Maybe<Array<Location_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Location_Order_By>>;
  where?: Maybe<Location_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootLocation_AggregateArgs = {
  distinct_on?: Maybe<Array<Location_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Location_Order_By>>;
  where?: Maybe<Location_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootLocation_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootLot_RowArgs = {
  distinct_on?: Maybe<Array<Lot_Row_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lot_Row_Order_By>>;
  where?: Maybe<Lot_Row_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootLot_Row_AggregateArgs = {
  distinct_on?: Maybe<Array<Lot_Row_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lot_Row_Order_By>>;
  where?: Maybe<Lot_Row_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootLot_Row_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootNearby_SpacesArgs = {
  arg1: NearbySpacesInput;
};


/** subscription root */
export type Subscription_RootParking_LotArgs = {
  distinct_on?: Maybe<Array<Parking_Lot_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Parking_Lot_Order_By>>;
  where?: Maybe<Parking_Lot_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootParking_Lot_AggregateArgs = {
  distinct_on?: Maybe<Array<Parking_Lot_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Parking_Lot_Order_By>>;
  where?: Maybe<Parking_Lot_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootParking_Lot_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootParking_SpaceArgs = {
  distinct_on?: Maybe<Array<Parking_Space_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Parking_Space_Order_By>>;
  where?: Maybe<Parking_Space_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootParking_Space_AggregateArgs = {
  distinct_on?: Maybe<Array<Parking_Space_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Parking_Space_Order_By>>;
  where?: Maybe<Parking_Space_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootParking_Space_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootPast_Lot_OccupancyArgs = {
  distinct_on?: Maybe<Array<Past_Lot_Occupancy_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Past_Lot_Occupancy_Order_By>>;
  where?: Maybe<Past_Lot_Occupancy_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPast_Lot_Occupancy_AggregateArgs = {
  distinct_on?: Maybe<Array<Past_Lot_Occupancy_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Past_Lot_Occupancy_Order_By>>;
  where?: Maybe<Past_Lot_Occupancy_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPast_Lot_Occupancy_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootUser_InstitutionArgs = {
  distinct_on?: Maybe<Array<User_Institution_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Institution_Order_By>>;
  where?: Maybe<User_Institution_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_Institution_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Institution_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Institution_Order_By>>;
  where?: Maybe<User_Institution_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootVacant_SpaceArgs = {
  distinct_on?: Maybe<Array<Vacant_Space_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vacant_Space_Order_By>>;
  where?: Maybe<Vacant_Space_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootVacant_Space_AggregateArgs = {
  distinct_on?: Maybe<Array<Vacant_Space_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vacant_Space_Order_By>>;
  where?: Maybe<Vacant_Space_Bool_Exp>;
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  created_at: Scalars['timestamptz'];
  email?: Maybe<Scalars['String']>;
  /** An array relationship */
  favorites: Array<Favorites>;
  /** An aggregated array relationship */
  favorites_aggregate: Favorites_Aggregate;
  first_name: Scalars['String'];
  id: Scalars['Int'];
  last_name: Scalars['String'];
  password: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  /** An array relationship */
  user_institutions: Array<User_Institution>;
  /** An aggregated array relationship */
  user_institutions_aggregate: User_Institution_Aggregate;
};


/** columns and relationships of "user" */
export type UserFavoritesArgs = {
  distinct_on?: Maybe<Array<Favorites_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Favorites_Order_By>>;
  where?: Maybe<Favorites_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserFavorites_AggregateArgs = {
  distinct_on?: Maybe<Array<Favorites_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Favorites_Order_By>>;
  where?: Maybe<Favorites_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserUser_InstitutionsArgs = {
  distinct_on?: Maybe<Array<User_Institution_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Institution_Order_By>>;
  where?: Maybe<User_Institution_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserUser_Institutions_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Institution_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Institution_Order_By>>;
  where?: Maybe<User_Institution_Bool_Exp>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  avg?: Maybe<User_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
  stddev?: Maybe<User_Stddev_Fields>;
  stddev_pop?: Maybe<User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Stddev_Samp_Fields>;
  sum?: Maybe<User_Sum_Fields>;
  var_pop?: Maybe<User_Var_Pop_Fields>;
  var_samp?: Maybe<User_Var_Samp_Fields>;
  variance?: Maybe<User_Variance_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user" */
export type User_Aggregate_Order_By = {
  avg?: Maybe<User_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<User_Max_Order_By>;
  min?: Maybe<User_Min_Order_By>;
  stddev?: Maybe<User_Stddev_Order_By>;
  stddev_pop?: Maybe<User_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<User_Stddev_Samp_Order_By>;
  sum?: Maybe<User_Sum_Order_By>;
  var_pop?: Maybe<User_Var_Pop_Order_By>;
  var_samp?: Maybe<User_Var_Samp_Order_By>;
  variance?: Maybe<User_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user" */
export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Avg_Fields = {
  __typename?: 'user_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user" */
export type User_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  _not?: Maybe<User_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  favorites?: Maybe<Favorites_Bool_Exp>;
  first_name?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  last_name?: Maybe<String_Comparison_Exp>;
  password?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_institutions?: Maybe<User_Institution_Bool_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserEmailUnique = 'user_email_unique',
  /** unique or primary key constraint */
  UserPkey = 'user_pkey'
}

/** input type for incrementing integer column in table "user" */
export type User_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  favorites?: Maybe<Favorites_Arr_Rel_Insert_Input>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_institutions?: Maybe<User_Institution_Arr_Rel_Insert_Input>;
};

/** columns and relationships of "user_institution" */
export type User_Institution = {
  __typename?: 'user_institution';
  /** An object relationship */
  institution: Institution;
  institution_id: Scalars['Int'];
  is_admin: Scalars['Boolean'];
  /** An object relationship */
  user: User;
  user_id: Scalars['Int'];
};

/** aggregated selection of "user_institution" */
export type User_Institution_Aggregate = {
  __typename?: 'user_institution_aggregate';
  aggregate?: Maybe<User_Institution_Aggregate_Fields>;
  nodes: Array<User_Institution>;
};

/** aggregate fields of "user_institution" */
export type User_Institution_Aggregate_Fields = {
  __typename?: 'user_institution_aggregate_fields';
  avg?: Maybe<User_Institution_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<User_Institution_Max_Fields>;
  min?: Maybe<User_Institution_Min_Fields>;
  stddev?: Maybe<User_Institution_Stddev_Fields>;
  stddev_pop?: Maybe<User_Institution_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Institution_Stddev_Samp_Fields>;
  sum?: Maybe<User_Institution_Sum_Fields>;
  var_pop?: Maybe<User_Institution_Var_Pop_Fields>;
  var_samp?: Maybe<User_Institution_Var_Samp_Fields>;
  variance?: Maybe<User_Institution_Variance_Fields>;
};


/** aggregate fields of "user_institution" */
export type User_Institution_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Institution_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_institution" */
export type User_Institution_Aggregate_Order_By = {
  avg?: Maybe<User_Institution_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<User_Institution_Max_Order_By>;
  min?: Maybe<User_Institution_Min_Order_By>;
  stddev?: Maybe<User_Institution_Stddev_Order_By>;
  stddev_pop?: Maybe<User_Institution_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<User_Institution_Stddev_Samp_Order_By>;
  sum?: Maybe<User_Institution_Sum_Order_By>;
  var_pop?: Maybe<User_Institution_Var_Pop_Order_By>;
  var_samp?: Maybe<User_Institution_Var_Samp_Order_By>;
  variance?: Maybe<User_Institution_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_institution" */
export type User_Institution_Arr_Rel_Insert_Input = {
  data: Array<User_Institution_Insert_Input>;
  on_conflict?: Maybe<User_Institution_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Institution_Avg_Fields = {
  __typename?: 'user_institution_avg_fields';
  institution_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user_institution" */
export type User_Institution_Avg_Order_By = {
  institution_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_institution". All fields are combined with a logical 'AND'. */
export type User_Institution_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Institution_Bool_Exp>>>;
  _not?: Maybe<User_Institution_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Institution_Bool_Exp>>>;
  institution?: Maybe<Institution_Bool_Exp>;
  institution_id?: Maybe<Int_Comparison_Exp>;
  is_admin?: Maybe<Boolean_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_institution" */
export enum User_Institution_Constraint {
  /** unique or primary key constraint */
  UserInstitutionUserIdInstitutionIdUnique = 'user_institution_user_id_institution_id_unique'
}

/** input type for incrementing integer column in table "user_institution" */
export type User_Institution_Inc_Input = {
  institution_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "user_institution" */
export type User_Institution_Insert_Input = {
  institution?: Maybe<Institution_Obj_Rel_Insert_Input>;
  institution_id?: Maybe<Scalars['Int']>;
  is_admin?: Maybe<Scalars['Boolean']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type User_Institution_Max_Fields = {
  __typename?: 'user_institution_max_fields';
  institution_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "user_institution" */
export type User_Institution_Max_Order_By = {
  institution_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Institution_Min_Fields = {
  __typename?: 'user_institution_min_fields';
  institution_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "user_institution" */
export type User_Institution_Min_Order_By = {
  institution_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "user_institution" */
export type User_Institution_Mutation_Response = {
  __typename?: 'user_institution_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<User_Institution>;
};

/** input type for inserting object relation for remote table "user_institution" */
export type User_Institution_Obj_Rel_Insert_Input = {
  data: User_Institution_Insert_Input;
  on_conflict?: Maybe<User_Institution_On_Conflict>;
};

/** on conflict condition type for table "user_institution" */
export type User_Institution_On_Conflict = {
  constraint: User_Institution_Constraint;
  update_columns: Array<User_Institution_Update_Column>;
  where?: Maybe<User_Institution_Bool_Exp>;
};

/** ordering options when selecting data from "user_institution" */
export type User_Institution_Order_By = {
  institution?: Maybe<Institution_Order_By>;
  institution_id?: Maybe<Order_By>;
  is_admin?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** select columns of table "user_institution" */
export enum User_Institution_Select_Column {
  /** column name */
  InstitutionId = 'institution_id',
  /** column name */
  IsAdmin = 'is_admin',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_institution" */
export type User_Institution_Set_Input = {
  institution_id?: Maybe<Scalars['Int']>;
  is_admin?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type User_Institution_Stddev_Fields = {
  __typename?: 'user_institution_stddev_fields';
  institution_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user_institution" */
export type User_Institution_Stddev_Order_By = {
  institution_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Institution_Stddev_Pop_Fields = {
  __typename?: 'user_institution_stddev_pop_fields';
  institution_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user_institution" */
export type User_Institution_Stddev_Pop_Order_By = {
  institution_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Institution_Stddev_Samp_Fields = {
  __typename?: 'user_institution_stddev_samp_fields';
  institution_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user_institution" */
export type User_Institution_Stddev_Samp_Order_By = {
  institution_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type User_Institution_Sum_Fields = {
  __typename?: 'user_institution_sum_fields';
  institution_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "user_institution" */
export type User_Institution_Sum_Order_By = {
  institution_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** update columns of table "user_institution" */
export enum User_Institution_Update_Column {
  /** column name */
  InstitutionId = 'institution_id',
  /** column name */
  IsAdmin = 'is_admin',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type User_Institution_Var_Pop_Fields = {
  __typename?: 'user_institution_var_pop_fields';
  institution_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user_institution" */
export type User_Institution_Var_Pop_Order_By = {
  institution_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Institution_Var_Samp_Fields = {
  __typename?: 'user_institution_var_samp_fields';
  institution_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user_institution" */
export type User_Institution_Var_Samp_Order_By = {
  institution_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Institution_Variance_Fields = {
  __typename?: 'user_institution_variance_fields';
  institution_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user_institution" */
export type User_Institution_Variance_Order_By = {
  institution_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "user" */
export type User_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "user" */
export type User_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** on conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns: Array<User_Update_Column>;
  where?: Maybe<User_Bool_Exp>;
};

/** ordering options when selecting data from "user" */
export type User_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  favorites_aggregate?: Maybe<Favorites_Aggregate_Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_institutions_aggregate?: Maybe<User_Institution_Aggregate_Order_By>;
};

/** primary key columns input for table: "user" */
export type User_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Password = 'password',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type User_Stddev_Fields = {
  __typename?: 'user_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user" */
export type User_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Stddev_Pop_Fields = {
  __typename?: 'user_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user" */
export type User_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Stddev_Samp_Fields = {
  __typename?: 'user_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user" */
export type User_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type User_Sum_Fields = {
  __typename?: 'user_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "user" */
export type User_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Password = 'password',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type User_Var_Pop_Fields = {
  __typename?: 'user_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user" */
export type User_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Var_Samp_Fields = {
  __typename?: 'user_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user" */
export type User_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Variance_Fields = {
  __typename?: 'user_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user" */
export type User_Variance_Order_By = {
  id?: Maybe<Order_By>;
};


/** columns and relationships of "vacant_space" */
export type Vacant_Space = {
  __typename?: 'vacant_space';
  capacity?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  parking_lot?: Maybe<Parking_Lot>;
  vacant_count?: Maybe<Scalars['bigint']>;
};

/** aggregated selection of "vacant_space" */
export type Vacant_Space_Aggregate = {
  __typename?: 'vacant_space_aggregate';
  aggregate?: Maybe<Vacant_Space_Aggregate_Fields>;
  nodes: Array<Vacant_Space>;
};

/** aggregate fields of "vacant_space" */
export type Vacant_Space_Aggregate_Fields = {
  __typename?: 'vacant_space_aggregate_fields';
  avg?: Maybe<Vacant_Space_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Vacant_Space_Max_Fields>;
  min?: Maybe<Vacant_Space_Min_Fields>;
  stddev?: Maybe<Vacant_Space_Stddev_Fields>;
  stddev_pop?: Maybe<Vacant_Space_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vacant_Space_Stddev_Samp_Fields>;
  sum?: Maybe<Vacant_Space_Sum_Fields>;
  var_pop?: Maybe<Vacant_Space_Var_Pop_Fields>;
  var_samp?: Maybe<Vacant_Space_Var_Samp_Fields>;
  variance?: Maybe<Vacant_Space_Variance_Fields>;
};


/** aggregate fields of "vacant_space" */
export type Vacant_Space_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Vacant_Space_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "vacant_space" */
export type Vacant_Space_Aggregate_Order_By = {
  avg?: Maybe<Vacant_Space_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Vacant_Space_Max_Order_By>;
  min?: Maybe<Vacant_Space_Min_Order_By>;
  stddev?: Maybe<Vacant_Space_Stddev_Order_By>;
  stddev_pop?: Maybe<Vacant_Space_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Vacant_Space_Stddev_Samp_Order_By>;
  sum?: Maybe<Vacant_Space_Sum_Order_By>;
  var_pop?: Maybe<Vacant_Space_Var_Pop_Order_By>;
  var_samp?: Maybe<Vacant_Space_Var_Samp_Order_By>;
  variance?: Maybe<Vacant_Space_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Vacant_Space_Avg_Fields = {
  __typename?: 'vacant_space_avg_fields';
  capacity?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  vacant_count?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "vacant_space" */
export type Vacant_Space_Avg_Order_By = {
  capacity?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  vacant_count?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vacant_space". All fields are combined with a logical 'AND'. */
export type Vacant_Space_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Vacant_Space_Bool_Exp>>>;
  _not?: Maybe<Vacant_Space_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Vacant_Space_Bool_Exp>>>;
  capacity?: Maybe<Bigint_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  parking_lot?: Maybe<Parking_Lot_Bool_Exp>;
  vacant_count?: Maybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Vacant_Space_Max_Fields = {
  __typename?: 'vacant_space_max_fields';
  capacity?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  vacant_count?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "vacant_space" */
export type Vacant_Space_Max_Order_By = {
  capacity?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  vacant_count?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Vacant_Space_Min_Fields = {
  __typename?: 'vacant_space_min_fields';
  capacity?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  vacant_count?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "vacant_space" */
export type Vacant_Space_Min_Order_By = {
  capacity?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  vacant_count?: Maybe<Order_By>;
};

/** ordering options when selecting data from "vacant_space" */
export type Vacant_Space_Order_By = {
  capacity?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  parking_lot?: Maybe<Parking_Lot_Order_By>;
  vacant_count?: Maybe<Order_By>;
};

/** select columns of table "vacant_space" */
export enum Vacant_Space_Select_Column {
  /** column name */
  Capacity = 'capacity',
  /** column name */
  Id = 'id',
  /** column name */
  VacantCount = 'vacant_count'
}

/** aggregate stddev on columns */
export type Vacant_Space_Stddev_Fields = {
  __typename?: 'vacant_space_stddev_fields';
  capacity?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  vacant_count?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "vacant_space" */
export type Vacant_Space_Stddev_Order_By = {
  capacity?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  vacant_count?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Vacant_Space_Stddev_Pop_Fields = {
  __typename?: 'vacant_space_stddev_pop_fields';
  capacity?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  vacant_count?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "vacant_space" */
export type Vacant_Space_Stddev_Pop_Order_By = {
  capacity?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  vacant_count?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Vacant_Space_Stddev_Samp_Fields = {
  __typename?: 'vacant_space_stddev_samp_fields';
  capacity?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  vacant_count?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "vacant_space" */
export type Vacant_Space_Stddev_Samp_Order_By = {
  capacity?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  vacant_count?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Vacant_Space_Sum_Fields = {
  __typename?: 'vacant_space_sum_fields';
  capacity?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  vacant_count?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "vacant_space" */
export type Vacant_Space_Sum_Order_By = {
  capacity?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  vacant_count?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Vacant_Space_Var_Pop_Fields = {
  __typename?: 'vacant_space_var_pop_fields';
  capacity?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  vacant_count?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "vacant_space" */
export type Vacant_Space_Var_Pop_Order_By = {
  capacity?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  vacant_count?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Vacant_Space_Var_Samp_Fields = {
  __typename?: 'vacant_space_var_samp_fields';
  capacity?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  vacant_count?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "vacant_space" */
export type Vacant_Space_Var_Samp_Order_By = {
  capacity?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  vacant_count?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Vacant_Space_Variance_Fields = {
  __typename?: 'vacant_space_variance_fields';
  capacity?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  vacant_count?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "vacant_space" */
export type Vacant_Space_Variance_Order_By = {
  capacity?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  vacant_count?: Maybe<Order_By>;
};

export type ParkingLotCardInfoFragment = (
  { __typename?: 'parking_lot' }
  & Pick<Parking_Lot, 'id' | 'name' | 'lot_image'>
  & { vacant_space?: Maybe<(
    { __typename?: 'vacant_space' }
    & Pick<Vacant_Space, 'vacant_count'>
  )> }
);

export type ParkingLotMapInfoFragment = (
  { __typename?: 'parking_lot' }
  & Pick<Parking_Lot, 'id'>
  & { location: (
    { __typename?: 'location' }
    & Pick<Location, 'id' | 'latitude' | 'longitude'>
  ), vacant_space?: Maybe<(
    { __typename?: 'vacant_space' }
    & Pick<Vacant_Space, 'vacant_count' | 'capacity'>
  )> }
);

export type ParkingSpaceInfoFragment = (
  { __typename?: 'parking_space' }
  & Pick<Parking_Space, 'id' | 'space_id' | 'is_road' | 'is_occupied' | 'is_entry' | 'is_exit' | 'is_blank' | 'is_disabled' | 'is_driver_disabled_parking' | 'rotation'>
);

export type AddToFavoritesMutationVariables = Exact<{
  uid: Scalars['Int'];
  parking_lot_id: Scalars['Int'];
}>;


export type AddToFavoritesMutation = (
  { __typename?: 'mutation_root' }
  & { insert_favorites_one?: Maybe<(
    { __typename?: 'favorites' }
    & Pick<Favorites, 'user_id' | 'parking_lot_id'>
    & { user: (
      { __typename?: 'user' }
      & { favorites: Array<(
        { __typename?: 'favorites' }
        & { parking_lot: (
          { __typename?: 'parking_lot' }
          & Pick<Parking_Lot, 'id'>
        ) }
      )> }
    ) }
  )> }
);

export type UpdateParkingLotMutationVariables = Exact<{
  id: Scalars['Int'];
  _set?: Maybe<Parking_Lot_Set_Input>;
}>;


export type UpdateParkingLotMutation = (
  { __typename?: 'mutation_root' }
  & { update_parking_lot_by_pk?: Maybe<(
    { __typename?: 'parking_lot' }
    & Pick<Parking_Lot, 'id' | 'is_disabled'>
  )> }
);

export type UpdateParkingSpaceMutationVariables = Exact<{
  id: Scalars['Int'];
  _set?: Maybe<Parking_Space_Set_Input>;
}>;


export type UpdateParkingSpaceMutation = (
  { __typename?: 'mutation_root' }
  & { update_parking_space_by_pk?: Maybe<(
    { __typename?: 'parking_space' }
    & ParkingSpaceInfoFragment
  )> }
);

export type AdminDashboardQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type AdminDashboardQuery = (
  { __typename?: 'query_root' }
  & { user_by_pk?: Maybe<(
    { __typename?: 'user' }
    & { user_institutions: Array<(
      { __typename?: 'user_institution' }
      & { institution: (
        { __typename?: 'institution' }
        & Pick<Institution, 'name'>
        & { user_institutions_aggregate: (
          { __typename?: 'user_institution_aggregate' }
          & { aggregate?: Maybe<(
            { __typename?: 'user_institution_aggregate_fields' }
            & Pick<User_Institution_Aggregate_Fields, 'count'>
          )> }
        ), parking_lots: Array<(
          { __typename?: 'parking_lot' }
          & Pick<Parking_Lot, 'name'>
          & { vacant_space?: Maybe<(
            { __typename?: 'vacant_space' }
            & Pick<Vacant_Space, 'vacant_count'>
          )> }
        )>, parking_lots_aggregate: (
          { __typename?: 'parking_lot_aggregate' }
          & { aggregate?: Maybe<(
            { __typename?: 'parking_lot_aggregate_fields' }
            & Pick<Parking_Lot_Aggregate_Fields, 'count'>
          )> }
        ) }
      ) }
    )> }
  )> }
);

export type DriversByInstitutionQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DriversByInstitutionQuery = (
  { __typename?: 'query_root' }
  & { institution_by_pk?: Maybe<(
    { __typename?: 'institution' }
    & { user_institutions: Array<(
      { __typename?: 'user_institution' }
      & Pick<User_Institution, 'user_id' | 'is_admin'>
      & { user: (
        { __typename?: 'user' }
        & Pick<User, 'first_name' | 'last_name' | 'email'>
      ) }
    )> }
  )> }
);

export type FavoritesQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type FavoritesQuery = (
  { __typename?: 'query_root' }
  & { user_by_pk?: Maybe<(
    { __typename?: 'user' }
    & { favorites: Array<(
      { __typename?: 'favorites' }
      & { parking_lot: (
        { __typename?: 'parking_lot' }
        & Pick<Parking_Lot, 'id'>
      ) }
    )> }
  )> }
);

export type NearbySpacesQueryVariables = Exact<{
  userLocation: NearbySpacesInput;
}>;


export type NearbySpacesQuery = (
  { __typename?: 'query_root' }
  & { nearby_spaces?: Maybe<Array<Maybe<(
    { __typename?: 'NearbySpacesOutput' }
    & Pick<NearbySpacesOutput, 'distance'>
    & { parking_lot?: Maybe<(
      { __typename?: 'parking_lot' }
      & ParkingLotCardInfoFragment
    )> }
  )>>> }
);

export type ParkingLotBottomBarByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type ParkingLotBottomBarByIdQuery = (
  { __typename?: 'query_root' }
  & { parking_lot_by_pk?: Maybe<(
    { __typename?: 'parking_lot' }
    & Pick<Parking_Lot, 'id' | 'name'>
    & { location: (
      { __typename?: 'location' }
      & Pick<Location, 'id' | 'address' | 'latitude' | 'longitude'>
    ), vacant_space?: Maybe<(
      { __typename?: 'vacant_space' }
      & Pick<Vacant_Space, 'vacant_count' | 'capacity'>
    )> }
  )> }
);

export type ParkingLotDetailsByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type ParkingLotDetailsByIdQuery = (
  { __typename?: 'query_root' }
  & { parking_lot_by_pk?: Maybe<(
    { __typename?: 'parking_lot' }
    & Pick<Parking_Lot, 'id' | 'name' | 'is_disabled'>
    & { vacant_space?: Maybe<(
      { __typename?: 'vacant_space' }
      & Pick<Vacant_Space, 'vacant_count'>
    )>, location: (
      { __typename?: 'location' }
      & Pick<Location, 'latitude' | 'longitude'>
    ), lot_rows: Array<(
      { __typename?: 'lot_row' }
      & Pick<Lot_Row, 'id'>
      & { parking_spaces: Array<(
        { __typename?: 'parking_space' }
        & ParkingSpaceInfoFragment
      )> }
    )> }
  )> }
);

export type ParkingLotListQueryVariables = Exact<{
  uid: Scalars['Int'];
  userLocation: NearbySpacesInput;
}>;


export type ParkingLotListQuery = (
  { __typename?: 'query_root' }
  & { nearby_spaces?: Maybe<Array<Maybe<(
    { __typename?: 'NearbySpacesOutput' }
    & Pick<NearbySpacesOutput, 'distance'>
    & { parking_lot?: Maybe<(
      { __typename?: 'parking_lot' }
      & Pick<Parking_Lot, 'id'>
      & { favorites: Array<(
        { __typename?: 'favorites' }
        & Pick<Favorites, 'user_id'>
      )> }
      & ParkingLotCardInfoFragment
    )> }
  )>>> }
);

export type ParkingLotsQueryVariables = Exact<{ [key: string]: never; }>;


export type ParkingLotsQuery = (
  { __typename?: 'query_root' }
  & { parking_lot: Array<(
    { __typename?: 'parking_lot' }
    & ParkingLotMapInfoFragment
  )> }
);

export type ParkingLotsByInstitutionIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type ParkingLotsByInstitutionIdQuery = (
  { __typename?: 'query_root' }
  & { institution_by_pk?: Maybe<(
    { __typename?: 'institution' }
    & { parking_lots: Array<(
      { __typename?: 'parking_lot' }
      & ParkingLotCardInfoFragment
    )> }
  )> }
);

export type PastLotOccupancyQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type PastLotOccupancyQuery = (
  { __typename?: 'query_root' }
  & { past_lot_occupancy: Array<(
    { __typename?: 'past_lot_occupancy' }
    & Pick<Past_Lot_Occupancy, 'occupied' | 'updated_at'>
  )> }
);

export const ParkingLotCardInfoFragmentDoc = gql`
    fragment ParkingLotCardInfo on parking_lot {
  id
  name
  lot_image
  vacant_space {
    vacant_count
  }
}
    `;
export const ParkingLotMapInfoFragmentDoc = gql`
    fragment ParkingLotMapInfo on parking_lot {
  id
  location {
    id
    latitude
    longitude
  }
  vacant_space {
    vacant_count
    capacity
  }
}
    `;
export const ParkingSpaceInfoFragmentDoc = gql`
    fragment ParkingSpaceInfo on parking_space {
  id
  space_id
  is_road
  is_occupied
  is_entry
  is_exit
  is_blank
  is_disabled
  is_driver_disabled_parking
  rotation
}
    `;
export const AddToFavoritesDocument = gql`
    mutation AddToFavorites($uid: Int!, $parking_lot_id: Int!) {
  insert_favorites_one(object: {user_id: $uid, parking_lot_id: $parking_lot_id}) {
    user_id
    parking_lot_id
    user {
      favorites {
        parking_lot {
          id
        }
      }
    }
  }
}
    `;
export type AddToFavoritesMutationFn = Apollo.MutationFunction<AddToFavoritesMutation, AddToFavoritesMutationVariables>;

/**
 * __useAddToFavoritesMutation__
 *
 * To run a mutation, you first call `useAddToFavoritesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddToFavoritesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addToFavoritesMutation, { data, loading, error }] = useAddToFavoritesMutation({
 *   variables: {
 *      uid: // value for 'uid'
 *      parking_lot_id: // value for 'parking_lot_id'
 *   },
 * });
 */
export function useAddToFavoritesMutation(baseOptions?: Apollo.MutationHookOptions<AddToFavoritesMutation, AddToFavoritesMutationVariables>) {
        return Apollo.useMutation<AddToFavoritesMutation, AddToFavoritesMutationVariables>(AddToFavoritesDocument, baseOptions);
      }
export type AddToFavoritesMutationHookResult = ReturnType<typeof useAddToFavoritesMutation>;
export type AddToFavoritesMutationResult = Apollo.MutationResult<AddToFavoritesMutation>;
export type AddToFavoritesMutationOptions = Apollo.BaseMutationOptions<AddToFavoritesMutation, AddToFavoritesMutationVariables>;
export const UpdateParkingLotDocument = gql`
    mutation UpdateParkingLot($id: Int!, $_set: parking_lot_set_input) {
  update_parking_lot_by_pk(pk_columns: {id: $id}, _set: $_set) {
    id
    is_disabled
  }
}
    `;
export type UpdateParkingLotMutationFn = Apollo.MutationFunction<UpdateParkingLotMutation, UpdateParkingLotMutationVariables>;

/**
 * __useUpdateParkingLotMutation__
 *
 * To run a mutation, you first call `useUpdateParkingLotMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateParkingLotMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateParkingLotMutation, { data, loading, error }] = useUpdateParkingLotMutation({
 *   variables: {
 *      id: // value for 'id'
 *      _set: // value for '_set'
 *   },
 * });
 */
export function useUpdateParkingLotMutation(baseOptions?: Apollo.MutationHookOptions<UpdateParkingLotMutation, UpdateParkingLotMutationVariables>) {
        return Apollo.useMutation<UpdateParkingLotMutation, UpdateParkingLotMutationVariables>(UpdateParkingLotDocument, baseOptions);
      }
export type UpdateParkingLotMutationHookResult = ReturnType<typeof useUpdateParkingLotMutation>;
export type UpdateParkingLotMutationResult = Apollo.MutationResult<UpdateParkingLotMutation>;
export type UpdateParkingLotMutationOptions = Apollo.BaseMutationOptions<UpdateParkingLotMutation, UpdateParkingLotMutationVariables>;
export const UpdateParkingSpaceDocument = gql`
    mutation UpdateParkingSpace($id: Int!, $_set: parking_space_set_input) {
  update_parking_space_by_pk(pk_columns: {id: $id}, _set: $_set) {
    ...ParkingSpaceInfo
  }
}
    ${ParkingSpaceInfoFragmentDoc}`;
export type UpdateParkingSpaceMutationFn = Apollo.MutationFunction<UpdateParkingSpaceMutation, UpdateParkingSpaceMutationVariables>;

/**
 * __useUpdateParkingSpaceMutation__
 *
 * To run a mutation, you first call `useUpdateParkingSpaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateParkingSpaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateParkingSpaceMutation, { data, loading, error }] = useUpdateParkingSpaceMutation({
 *   variables: {
 *      id: // value for 'id'
 *      _set: // value for '_set'
 *   },
 * });
 */
export function useUpdateParkingSpaceMutation(baseOptions?: Apollo.MutationHookOptions<UpdateParkingSpaceMutation, UpdateParkingSpaceMutationVariables>) {
        return Apollo.useMutation<UpdateParkingSpaceMutation, UpdateParkingSpaceMutationVariables>(UpdateParkingSpaceDocument, baseOptions);
      }
export type UpdateParkingSpaceMutationHookResult = ReturnType<typeof useUpdateParkingSpaceMutation>;
export type UpdateParkingSpaceMutationResult = Apollo.MutationResult<UpdateParkingSpaceMutation>;
export type UpdateParkingSpaceMutationOptions = Apollo.BaseMutationOptions<UpdateParkingSpaceMutation, UpdateParkingSpaceMutationVariables>;
export const AdminDashboardDocument = gql`
    query AdminDashboard($id: Int!) {
  user_by_pk(id: $id) {
    user_institutions(where: {is_admin: {_eq: true}}) {
      institution {
        name
        user_institutions_aggregate {
          aggregate {
            count
          }
        }
        parking_lots {
          name
          vacant_space {
            vacant_count
          }
        }
        parking_lots_aggregate {
          aggregate {
            count
          }
        }
      }
    }
  }
}
    `;

/**
 * __useAdminDashboardQuery__
 *
 * To run a query within a React component, call `useAdminDashboardQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminDashboardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminDashboardQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAdminDashboardQuery(baseOptions: Apollo.QueryHookOptions<AdminDashboardQuery, AdminDashboardQueryVariables>) {
        return Apollo.useQuery<AdminDashboardQuery, AdminDashboardQueryVariables>(AdminDashboardDocument, baseOptions);
      }
export function useAdminDashboardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdminDashboardQuery, AdminDashboardQueryVariables>) {
          return Apollo.useLazyQuery<AdminDashboardQuery, AdminDashboardQueryVariables>(AdminDashboardDocument, baseOptions);
        }
export type AdminDashboardQueryHookResult = ReturnType<typeof useAdminDashboardQuery>;
export type AdminDashboardLazyQueryHookResult = ReturnType<typeof useAdminDashboardLazyQuery>;
export type AdminDashboardQueryResult = Apollo.QueryResult<AdminDashboardQuery, AdminDashboardQueryVariables>;
export const DriversByInstitutionDocument = gql`
    query DriversByInstitution($id: Int!) {
  institution_by_pk(id: $id) {
    user_institutions {
      user_id
      is_admin
      user {
        first_name
        last_name
        email
      }
    }
  }
}
    `;

/**
 * __useDriversByInstitutionQuery__
 *
 * To run a query within a React component, call `useDriversByInstitutionQuery` and pass it any options that fit your needs.
 * When your component renders, `useDriversByInstitutionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDriversByInstitutionQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDriversByInstitutionQuery(baseOptions: Apollo.QueryHookOptions<DriversByInstitutionQuery, DriversByInstitutionQueryVariables>) {
        return Apollo.useQuery<DriversByInstitutionQuery, DriversByInstitutionQueryVariables>(DriversByInstitutionDocument, baseOptions);
      }
export function useDriversByInstitutionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DriversByInstitutionQuery, DriversByInstitutionQueryVariables>) {
          return Apollo.useLazyQuery<DriversByInstitutionQuery, DriversByInstitutionQueryVariables>(DriversByInstitutionDocument, baseOptions);
        }
export type DriversByInstitutionQueryHookResult = ReturnType<typeof useDriversByInstitutionQuery>;
export type DriversByInstitutionLazyQueryHookResult = ReturnType<typeof useDriversByInstitutionLazyQuery>;
export type DriversByInstitutionQueryResult = Apollo.QueryResult<DriversByInstitutionQuery, DriversByInstitutionQueryVariables>;
export const FavoritesDocument = gql`
    query Favorites($id: Int!) {
  user_by_pk(id: $id) {
    favorites {
      parking_lot {
        id
      }
    }
  }
}
    `;

/**
 * __useFavoritesQuery__
 *
 * To run a query within a React component, call `useFavoritesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFavoritesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFavoritesQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFavoritesQuery(baseOptions: Apollo.QueryHookOptions<FavoritesQuery, FavoritesQueryVariables>) {
        return Apollo.useQuery<FavoritesQuery, FavoritesQueryVariables>(FavoritesDocument, baseOptions);
      }
export function useFavoritesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FavoritesQuery, FavoritesQueryVariables>) {
          return Apollo.useLazyQuery<FavoritesQuery, FavoritesQueryVariables>(FavoritesDocument, baseOptions);
        }
export type FavoritesQueryHookResult = ReturnType<typeof useFavoritesQuery>;
export type FavoritesLazyQueryHookResult = ReturnType<typeof useFavoritesLazyQuery>;
export type FavoritesQueryResult = Apollo.QueryResult<FavoritesQuery, FavoritesQueryVariables>;
export const NearbySpacesDocument = gql`
    query NearbySpaces($userLocation: NearbySpacesInput!) {
  nearby_spaces(arg1: $userLocation) {
    distance
    parking_lot {
      ...ParkingLotCardInfo
    }
  }
}
    ${ParkingLotCardInfoFragmentDoc}`;

/**
 * __useNearbySpacesQuery__
 *
 * To run a query within a React component, call `useNearbySpacesQuery` and pass it any options that fit your needs.
 * When your component renders, `useNearbySpacesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNearbySpacesQuery({
 *   variables: {
 *      userLocation: // value for 'userLocation'
 *   },
 * });
 */
export function useNearbySpacesQuery(baseOptions: Apollo.QueryHookOptions<NearbySpacesQuery, NearbySpacesQueryVariables>) {
        return Apollo.useQuery<NearbySpacesQuery, NearbySpacesQueryVariables>(NearbySpacesDocument, baseOptions);
      }
export function useNearbySpacesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NearbySpacesQuery, NearbySpacesQueryVariables>) {
          return Apollo.useLazyQuery<NearbySpacesQuery, NearbySpacesQueryVariables>(NearbySpacesDocument, baseOptions);
        }
export type NearbySpacesQueryHookResult = ReturnType<typeof useNearbySpacesQuery>;
export type NearbySpacesLazyQueryHookResult = ReturnType<typeof useNearbySpacesLazyQuery>;
export type NearbySpacesQueryResult = Apollo.QueryResult<NearbySpacesQuery, NearbySpacesQueryVariables>;
export const ParkingLotBottomBarByIdDocument = gql`
    query ParkingLotBottomBarByID($id: Int!) {
  parking_lot_by_pk(id: $id) {
    id
    name
    location {
      id
      address
      latitude
      longitude
    }
    vacant_space {
      vacant_count
      capacity
    }
  }
}
    `;

/**
 * __useParkingLotBottomBarByIdQuery__
 *
 * To run a query within a React component, call `useParkingLotBottomBarByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useParkingLotBottomBarByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useParkingLotBottomBarByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useParkingLotBottomBarByIdQuery(baseOptions: Apollo.QueryHookOptions<ParkingLotBottomBarByIdQuery, ParkingLotBottomBarByIdQueryVariables>) {
        return Apollo.useQuery<ParkingLotBottomBarByIdQuery, ParkingLotBottomBarByIdQueryVariables>(ParkingLotBottomBarByIdDocument, baseOptions);
      }
export function useParkingLotBottomBarByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ParkingLotBottomBarByIdQuery, ParkingLotBottomBarByIdQueryVariables>) {
          return Apollo.useLazyQuery<ParkingLotBottomBarByIdQuery, ParkingLotBottomBarByIdQueryVariables>(ParkingLotBottomBarByIdDocument, baseOptions);
        }
export type ParkingLotBottomBarByIdQueryHookResult = ReturnType<typeof useParkingLotBottomBarByIdQuery>;
export type ParkingLotBottomBarByIdLazyQueryHookResult = ReturnType<typeof useParkingLotBottomBarByIdLazyQuery>;
export type ParkingLotBottomBarByIdQueryResult = Apollo.QueryResult<ParkingLotBottomBarByIdQuery, ParkingLotBottomBarByIdQueryVariables>;
export const ParkingLotDetailsByIdDocument = gql`
    query ParkingLotDetailsByID($id: Int!) {
  parking_lot_by_pk(id: $id) {
    id
    name
    is_disabled
    vacant_space {
      vacant_count
    }
    location {
      latitude
      longitude
    }
    lot_rows {
      id
      parking_spaces(order_by: {id: asc}) {
        ...ParkingSpaceInfo
      }
    }
  }
}
    ${ParkingSpaceInfoFragmentDoc}`;

/**
 * __useParkingLotDetailsByIdQuery__
 *
 * To run a query within a React component, call `useParkingLotDetailsByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useParkingLotDetailsByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useParkingLotDetailsByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useParkingLotDetailsByIdQuery(baseOptions: Apollo.QueryHookOptions<ParkingLotDetailsByIdQuery, ParkingLotDetailsByIdQueryVariables>) {
        return Apollo.useQuery<ParkingLotDetailsByIdQuery, ParkingLotDetailsByIdQueryVariables>(ParkingLotDetailsByIdDocument, baseOptions);
      }
export function useParkingLotDetailsByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ParkingLotDetailsByIdQuery, ParkingLotDetailsByIdQueryVariables>) {
          return Apollo.useLazyQuery<ParkingLotDetailsByIdQuery, ParkingLotDetailsByIdQueryVariables>(ParkingLotDetailsByIdDocument, baseOptions);
        }
export type ParkingLotDetailsByIdQueryHookResult = ReturnType<typeof useParkingLotDetailsByIdQuery>;
export type ParkingLotDetailsByIdLazyQueryHookResult = ReturnType<typeof useParkingLotDetailsByIdLazyQuery>;
export type ParkingLotDetailsByIdQueryResult = Apollo.QueryResult<ParkingLotDetailsByIdQuery, ParkingLotDetailsByIdQueryVariables>;
export const ParkingLotListDocument = gql`
    query ParkingLotList($uid: Int!, $userLocation: NearbySpacesInput!) {
  nearby_spaces(arg1: $userLocation) {
    distance
    parking_lot {
      favorites(where: {user_id: {_eq: $uid}}) {
        user_id
      }
      id
      ...ParkingLotCardInfo
    }
  }
}
    ${ParkingLotCardInfoFragmentDoc}`;

/**
 * __useParkingLotListQuery__
 *
 * To run a query within a React component, call `useParkingLotListQuery` and pass it any options that fit your needs.
 * When your component renders, `useParkingLotListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useParkingLotListQuery({
 *   variables: {
 *      uid: // value for 'uid'
 *      userLocation: // value for 'userLocation'
 *   },
 * });
 */
export function useParkingLotListQuery(baseOptions: Apollo.QueryHookOptions<ParkingLotListQuery, ParkingLotListQueryVariables>) {
        return Apollo.useQuery<ParkingLotListQuery, ParkingLotListQueryVariables>(ParkingLotListDocument, baseOptions);
      }
export function useParkingLotListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ParkingLotListQuery, ParkingLotListQueryVariables>) {
          return Apollo.useLazyQuery<ParkingLotListQuery, ParkingLotListQueryVariables>(ParkingLotListDocument, baseOptions);
        }
export type ParkingLotListQueryHookResult = ReturnType<typeof useParkingLotListQuery>;
export type ParkingLotListLazyQueryHookResult = ReturnType<typeof useParkingLotListLazyQuery>;
export type ParkingLotListQueryResult = Apollo.QueryResult<ParkingLotListQuery, ParkingLotListQueryVariables>;
export const ParkingLotsDocument = gql`
    query ParkingLots {
  parking_lot {
    ...ParkingLotMapInfo
  }
}
    ${ParkingLotMapInfoFragmentDoc}`;

/**
 * __useParkingLotsQuery__
 *
 * To run a query within a React component, call `useParkingLotsQuery` and pass it any options that fit your needs.
 * When your component renders, `useParkingLotsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useParkingLotsQuery({
 *   variables: {
 *   },
 * });
 */
export function useParkingLotsQuery(baseOptions?: Apollo.QueryHookOptions<ParkingLotsQuery, ParkingLotsQueryVariables>) {
        return Apollo.useQuery<ParkingLotsQuery, ParkingLotsQueryVariables>(ParkingLotsDocument, baseOptions);
      }
export function useParkingLotsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ParkingLotsQuery, ParkingLotsQueryVariables>) {
          return Apollo.useLazyQuery<ParkingLotsQuery, ParkingLotsQueryVariables>(ParkingLotsDocument, baseOptions);
        }
export type ParkingLotsQueryHookResult = ReturnType<typeof useParkingLotsQuery>;
export type ParkingLotsLazyQueryHookResult = ReturnType<typeof useParkingLotsLazyQuery>;
export type ParkingLotsQueryResult = Apollo.QueryResult<ParkingLotsQuery, ParkingLotsQueryVariables>;
export const ParkingLotsByInstitutionIdDocument = gql`
    query ParkingLotsByInstitutionID($id: Int!) {
  institution_by_pk(id: $id) {
    parking_lots(order_by: {id: asc}) {
      ...ParkingLotCardInfo
    }
  }
}
    ${ParkingLotCardInfoFragmentDoc}`;

/**
 * __useParkingLotsByInstitutionIdQuery__
 *
 * To run a query within a React component, call `useParkingLotsByInstitutionIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useParkingLotsByInstitutionIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useParkingLotsByInstitutionIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useParkingLotsByInstitutionIdQuery(baseOptions: Apollo.QueryHookOptions<ParkingLotsByInstitutionIdQuery, ParkingLotsByInstitutionIdQueryVariables>) {
        return Apollo.useQuery<ParkingLotsByInstitutionIdQuery, ParkingLotsByInstitutionIdQueryVariables>(ParkingLotsByInstitutionIdDocument, baseOptions);
      }
export function useParkingLotsByInstitutionIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ParkingLotsByInstitutionIdQuery, ParkingLotsByInstitutionIdQueryVariables>) {
          return Apollo.useLazyQuery<ParkingLotsByInstitutionIdQuery, ParkingLotsByInstitutionIdQueryVariables>(ParkingLotsByInstitutionIdDocument, baseOptions);
        }
export type ParkingLotsByInstitutionIdQueryHookResult = ReturnType<typeof useParkingLotsByInstitutionIdQuery>;
export type ParkingLotsByInstitutionIdLazyQueryHookResult = ReturnType<typeof useParkingLotsByInstitutionIdLazyQuery>;
export type ParkingLotsByInstitutionIdQueryResult = Apollo.QueryResult<ParkingLotsByInstitutionIdQuery, ParkingLotsByInstitutionIdQueryVariables>;
export const PastLotOccupancyDocument = gql`
    query PastLotOccupancy($id: Int!) {
  past_lot_occupancy(
    where: {parking_lot_id: {_eq: $id}}
    order_by: {updated_at: asc}
  ) {
    occupied
    updated_at
  }
}
    `;

/**
 * __usePastLotOccupancyQuery__
 *
 * To run a query within a React component, call `usePastLotOccupancyQuery` and pass it any options that fit your needs.
 * When your component renders, `usePastLotOccupancyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePastLotOccupancyQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePastLotOccupancyQuery(baseOptions: Apollo.QueryHookOptions<PastLotOccupancyQuery, PastLotOccupancyQueryVariables>) {
        return Apollo.useQuery<PastLotOccupancyQuery, PastLotOccupancyQueryVariables>(PastLotOccupancyDocument, baseOptions);
      }
export function usePastLotOccupancyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PastLotOccupancyQuery, PastLotOccupancyQueryVariables>) {
          return Apollo.useLazyQuery<PastLotOccupancyQuery, PastLotOccupancyQueryVariables>(PastLotOccupancyDocument, baseOptions);
        }
export type PastLotOccupancyQueryHookResult = ReturnType<typeof usePastLotOccupancyQuery>;
export type PastLotOccupancyLazyQueryHookResult = ReturnType<typeof usePastLotOccupancyLazyQuery>;
export type PastLotOccupancyQueryResult = Apollo.QueryResult<PastLotOccupancyQuery, PastLotOccupancyQueryVariables>;