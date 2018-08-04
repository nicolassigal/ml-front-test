import { QUERY_ITEM, QUERY_SEARCH, FILTER_CATEGORY } from '../config/constants';
import packageJSON from '../package.json';

export function getItemResponse (itemResponse, descriptionResponse, categoryResponse) {
    return {
        author: packageJSON.author,
        item: itemResponse && itemResponse.status === 200 ? new Item(itemResponse.data, descriptionResponse, QUERY_ITEM) : {},
        categories: categoryResponse && categoryResponse.status === 200 ? getCategories(categoryResponse.data) : []
    }
}

export function parseSearch (searchData) {
    const categoryFilter = searchData.filters.find(filter => filter.id === FILTER_CATEGORY);
    let categories = [],
        author = packageJSON.author,
        items = searchData.results.map(item => new Item(item, {}, QUERY_SEARCH));

    if(categoryFilter && categoryFilter.values.length) {
        categories = getCategories(categoryFilter.values[0]);
    }

    return {
        author: author,
        categories: categories,
        items: items
    };
}

function getCategories (categories) {
    return categories.path_from_root.map(category => category.name);
}

function pointThousandsSeparator(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}


function Item (item, descriptionResponse = {}, query) {
    this.id = item.id;
    this.title = item.title;
    const integer_part = Math.floor(Number(item.price));
    const decimal_part = Number((Number(item.price) - integer_part).toFixed(2)) * 100;

    this.price = {
        currency: item.currency_id,
        amount: pointThousandsSeparator(integer_part),
        decimals: decimal_part
    };
    
    this.condition = item.condition;
    this.free_shipping = item.shipping.free_shipping;
    if (query === QUERY_SEARCH) {
        this.state = item.address.state_name;  
        /**
         * Se toma la decisión de cambiar este caracter en la url de las imágenes
         * para traer las imagenes de tamaño 320 x 320 y de esa manera lograr una mejor
         * calidad en la lista. se toma en cuenta que esta solución es temporal y corre con el
         * riesgo de que cambie la definición de la API De imágenes y esto no escale muy bien, pero
         * se prefiere el riesgo antes de realizar 3 llamadas a otras API's para conseguir la imagen,
         * que para los fines prácticos del ejercicio se considera suficiente.
         */
        this.picture = item.thumbnail.replace('-I', '-V');
    }
    if (query === QUERY_ITEM) {
        this.sold_quantity = Number(item.sold_quantity);
        if(descriptionResponse && descriptionResponse.status === 200) {
            this.description = descriptionResponse.data.plain_text;
        } else {
            this.description = '';
        }
        let baseWidth = 0;
        item.pictures.map(picture => {
           let pictureWidth = picture.size.split('x')[0];
           if(pictureWidth > baseWidth) {
               baseWidth = pictureWidth;
               this.picture = picture.url;
           }
        });
    }
}