import CardActions from "@material-ui/core/CardActions";
import { AccountTree, Add } from "@material-ui/icons";
import React from "react";
import {
    AutocompleteInput,
    Button,
    Create,
    Datagrid,
    DateField,
    DateInput,
    DeleteButton,
    Edit,
    EditButton,
    Filter,
    Link,
    List,
    ListButton,
    Pagination,
    ReferenceField,
    ReferenceInput,
    ReferenceManyField,
    Show,
    ShowButton,
    SimpleForm,
    SimpleShowLayout,
    TextField,
    TextInput,
    required,
} from "react-admin";

export const ProductIcon = AccountTree;

const ProductFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

const ProductPagination = (props) => <Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />;

export const ProductList = (props) => (
    <List
        {...props}
        sort={{ field: "name", order: "ASC" }}
        filters={<ProductFilter />}
        pagination={<ProductPagination />}
        perPage={50}
    >
        <Datagrid rowClick="show">
            <TextField source="name" />
            <TextField source="description" />
            <ReferenceField source="client_id" reference="clients">
                <TextField source="oauth_client_id" />
            </ReferenceField>
            <EditButton />
            <DeleteButton />
            <ShowButton />
        </Datagrid>
    </List>
);

const ProductTitle = ({ record }) => {
    return <span>Product: {record ? `"${record.name}"` : ""}</span>;
};

const AddProductMethodButton = ({ record }) => (
    <Button
        component={Link}
        to={{
            pathname: "/product-types/create",
            search: `?product_id=${record ? record.id : ""}`,
        }}
        label="Add a product type"
    >
        <Add />
    </Button>
);

const ProductShowActions = ({ basePath, data }) => (
    <CardActions>
        <ListButton basePath={basePath} />
        <EditButton basePath={basePath} record={data} />
        <AddProductMethodButton record={data} />
    </CardActions>
);

export const ProductShow = (props) => (
    <Show title={<ProductTitle />} actions={<ProductShowActions />} {...props}>
        <SimpleShowLayout>
            <h2>Summary</h2>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
        </SimpleShowLayout>
    </Show>
);

export const ProductEdit = (props) => (
    <Edit title={<ProductTitle />} {...props}>
        <SimpleForm>
            <TextInput source="name" validate={required()} />
            <TextInput source="description" validate={required()} />
            <DateInput source="end_date" />
        </SimpleForm>
    </Edit>
);

export const ProductCreate = (props) => (
    <Create title="Create a Product" {...props} redirect="list">
        <SimpleForm redirect="list">
            <TextInput source="name" validate={required()} />
            <TextInput source="description" validate={required()} />
            <DateInput source="end_date" />
        </SimpleForm>
    </Create>
);
