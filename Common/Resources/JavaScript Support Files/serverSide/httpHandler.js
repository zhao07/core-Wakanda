/**
 *
 * Write and use incoming HTTP request handler functions. 
 *
 * @class HTTP Request Handlers
 * @extends Object
 *
 */
HTTPResponse = function HTTPResponse() {
    
    
    /**
     * 
     *
     * @property headers
     * @attributes ReadOnly
     * @type HTTPResponseHeader
     */
    this.headers =  new HTTPResponseHeader( ); 
    
    /**
     * 
     *
     * @property contentType
     * @attributes ReadOnly
     * @type String
     */
    this.contentType =  ''; 
    
    /**
     * 
     *
     * @property body
     * @attributes ReadOnly
     * @type Blob | Image | String
     */
    this.body =  new Blob( ) || new Image( ) || ''; 
    
    /**
     * 
     *
     * @property statusCode
     * @attributes ReadOnly
     * @type Number
     */
    this.statusCode =  0; 
    
    
    /**
     * sends an HTTPResponse in chunks without knowing in advance the size of the data
     *
     * @method sendChunkedData
     * @param {String | Image | Blob} data
     */
    this.sendChunkedData = function sendChunkedData(data) {             };
    
    /**
     * indicates if the contents of the HTTPResponse should be cached on the server
     *
     * @method allowCache
     * @param {Boolean} useCache
     */
    this.allowCache = function allowCache(useCache) {             };
    
    /**
     * sets custom compression thresholds for the HTTPResponse
     *
     * @method allowCompression
     * @param {Number} minThreshold
     * @param {Number} maxThreshold
     */
    this.allowCompression = function allowCompression(minThreshold, maxThreshold) {             };
    

};


HTTPRequestHeader = function HTTPRequestHeader() {
    
    
    /**
     * 
     *
     * @property USER_AGENT
     * @attributes ReadOnly
     * @type String
     */
    this.USER_AGENT =  ''; 
    
    /**
     * 
     *
     * @property TE
     * @attributes ReadOnly
     * @type String
     */
    this.TE =  ''; 
    
    /**
     * 
     *
     * @property REFERER
     * @attributes ReadOnly
     * @type String
     */
    this.REFERER =  ''; 
    
    /**
     * 
     *
     * @property RANGE
     * @attributes ReadOnly
     * @type String
     */
    this.RANGE =  ''; 
    
    /**
     * 
     *
     * @property PROXY_AUTHORIZATION
     * @attributes ReadOnly
     * @type String
     */
    this.PROXY_AUTHORIZATION =  ''; 
    
    /**
     * 
     *
     * @property PRAGMA
     * @attributes ReadOnly
     * @type String
     */
    this.PRAGMA =  ''; 
    
    /**
     * 
     *
     * @property MAX_FORWARDS
     * @attributes ReadOnly
     * @type String
     */
    this.MAX_FORWARDS =  ''; 
    
    /**
     * 
     *
     * @property KEEP_ALIVE
     * @attributes ReadOnly
     * @type String
     */
    this.KEEP_ALIVE =  ''; 
    
    /**
     * 
     *
     * @property IF_UNMODIFIED_SINCE
     * @attributes ReadOnly
     * @type String
     */
    this.IF_UNMODIFIED_SINCE =  ''; 
    
    /**
     * 
     *
     * @property IF_RANGE
     * @attributes ReadOnly
     * @type String
     */
    this.IF_RANGE =  ''; 
    
    /**
     * 
     *
     * @property IF_NONE_MATCH
     * @attributes ReadOnly
     * @type String
     */
    this.IF_NONE_MATCH =  ''; 
    
    /**
     * 
     *
     * @property IF_MODIFIED_SINCE
     * @attributes ReadOnly
     * @type String
     */
    this.IF_MODIFIED_SINCE =  ''; 
    
    /**
     * 
     *
     * @property IF_MATCH
     * @attributes ReadOnly
     * @type String
     */
    this.IF_MATCH =  ''; 
    
    /**
     * 
     *
     * @property HOST
     * @attributes ReadOnly
     * @type String
     */
    this.HOST =  ''; 
    
    /**
     * 
     *
     * @property FROM
     * @attributes ReadOnly
     * @type String
     */
    this.FROM =  ''; 
    
    /**
     * 
     *
     * @property EXPECT
     * @attributes ReadOnly
     * @type String
     */
    this.EXPECT =  ''; 
    
    /**
     * 
     *
     * @property COOKIE
     * @attributes ReadOnly
     * @type String
     */
    this.COOKIE =  ''; 
    
    /**
     * 
     *
     * @property CONTENT_TYPE
     * @attributes ReadOnly
     * @type String
     */
    this.CONTENT_TYPE =  ''; 
    
    /**
     * 
     *
     * @property CONTENT_LENGTH
     * @attributes ReadOnly
     * @type String
     */
    this.CONTENT_LENGTH =  ''; 
    
    /**
     * 
     *
     * @property CACHE_CONTROL
     * @attributes ReadOnly
     * @type String
     */
    this.CACHE_CONTROL =  ''; 
    
    /**
     * 
     *
     * @property AUTHORIZATION
     * @attributes ReadOnly
     * @type String
     */
    this.AUTHORIZATION =  ''; 
    
    /**
     * 
     *
     * @property ACCEPT_LANGUAGE
     * @attributes ReadOnly
     * @type String
     */
    this.ACCEPT_LANGUAGE =  ''; 
    
    /**
     * 
     *
     * @property ACCEPT_ENCODING
     * @attributes ReadOnly
     * @type String
     */
    this.ACCEPT_ENCODING =  ''; 
    
    /**
     * 
     *
     * @property ACCEPT
     * @attributes ReadOnly
     * @type String
     */
    this.ACCEPT =  ''; 
    
    /**
     * 
     *
     * @property ACCEPT_CHARSET
     * @attributes ReadOnly
     * @type String
     */
    this.ACCEPT_CHARSET =  ''; 
    
    

};


HTTPRequest = function HTTPRequest() {
    
    
    /**
     * 
     *
     * @property parts
     * @attributes ReadOnly
     * @type MIMEMessage
     */
    this.parts =  new MIMEMessage( ); 
    
    /**
     * 
     *
     * @property contentType
     * @attributes ReadOnly
     * @type String
     */
    this.contentType =  ''; 
    
    /**
     * 
     *
     * @property headers
     * @attributes ReadOnly
     * @type HTTPRequestHeader
     */
    this.headers =  new HTTPRequestHeader( ); 
    
    /**
     * 
     *
     * @property body
     * @attributes ReadOnly
     * @type String | Image | Blob
     */
    this.body =  '' || new Image( ) || new Blob( ); 
    
    /**
     * 
     *
     * @property requestLine
     * @attributes ReadOnly
     * @type String
     */
    this.requestLine =  ''; 
    
    /**
     * 
     *
     * @property password
     * @attributes ReadOnly
     * @type String
     */
    this.password =  ''; 
    
    /**
     * 
     *
     * @property user
     * @attributes ReadOnly
     * @type String
     */
    this.user =  ''; 
    
    /**
     * 
     *
     * @property version
     * @attributes ReadOnly
     * @type String
     */
    this.version =  ''; 
    
    /**
     * 
     *
     * @property method
     * @attributes ReadOnly
     * @type String
     */
    this.method =  ''; 
    
    /**
     * 
     *
     * @property host
     * @attributes ReadOnly
     * @type String
     */
    this.host =  ''; 
    
    /**
     * 
     *
     * @property urlQuery
     * @attributes ReadOnly
     * @type String
     */
    this.urlQuery =  ''; 
    
    /**
     * 
     *
     * @property url
     * @attributes ReadOnly
     * @type String
     */
    this.url =  ''; 
    
    /**
     * 
     *
     * @property rawURL
     * @attributes ReadOnly
     * @type String
     */
    this.rawURL =  ''; 
    
    /**
     * 
     *
     * @property urlPath
     * @attributes ReadOnly
     * @type String
     */
    this.urlPath =  ''; 
    
    /**
     * 
     *
     * @property isSSL
     * @attributes 
     * @type Boolean
     */
    this.isSSL =  true; 
    
    /**
     * 
     *
     * @property localPort
     * @attributes 
     * @type Number
     */
    this.localPort =  0; 
    
    /**
     * 
     *
     * @property localAddress
     * @attributes 
     * @type String
     */
    this.localAddress =  ''; 
    
    /**
     * 
     *
     * @property remotePort
     * @attributes 
     * @type Number
     */
    this.remotePort =  0; 
    
    /**
     * 
     *
     * @property remoteAddress
     * @attributes 
     * @type String
     */
    this.remoteAddress =  ''; 
    
    

};

