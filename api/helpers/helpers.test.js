import { getItemResponse, parseSearch } from './helpers';
import mock_search_response from './../test/mocks/full_search_response.json';
import mock_parsed_search from './../test/mocks/parsed_search_result.json';

import mock_item_detail from './../test/mocks/full_item_detail_response.json';
import mock_item_description from './../test/mocks/full_item_description_response.json';
import mock_item_categories from './../test/mocks/full_item_categories_response.json';
import parsed_item from './../test/mocks/parsed_item_detail.json';

describe('Helpers', () => {
    it('should parse a search response', () => {
        const data_search = parseSearch(mock_search_response.data);
        expect(JSON.stringify(data_search)).toBe(JSON.stringify(mock_parsed_search));
    });

    it('should parse a search response without categories', () => {
        const data = mock_search_response.data;
        data.filters = [];
        const data_search = parseSearch(data);
        const mock_data = { ...mock_parsed_search };
        mock_data.categories = [];
        expect(JSON.stringify(data_search)).toBe(JSON.stringify(mock_data));
    });

    it('should parse an item response', () => {
        const data_item = getItemResponse(mock_item_detail, mock_item_description, mock_item_categories);
        expect(JSON.stringify(data_item)).toBe(JSON.stringify(parsed_item));
    });

    it('should not find an item', () => {
        const mock_item_404 = {...parsed_item };
        mock_item_404.item = {};
        const data_item = getItemResponse({status: 404}, mock_item_description, mock_item_categories);
        expect(JSON.stringify(data_item)).toBe(JSON.stringify(mock_item_404));
    });

    it('should parse an item response without categories', () => {
        const mock_categories = {...parsed_item };
        mock_categories.categories = [];
        const data_cat = getItemResponse(mock_item_detail, mock_item_description, {status: 404});
        expect(JSON.stringify(data_cat)).toBe(JSON.stringify(mock_categories));
    });
    it('should parse an item response without description', () => {
        const mock_description = { ...parsed_item };
        mock_description.item.description = "";
        const data_desc = getItemResponse(mock_item_detail, {}, mock_item_categories);
        expect(JSON.stringify(data_desc)).toBe(JSON.stringify(mock_description));
    });
})